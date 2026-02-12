// ClientApp/src/api/incidentApi.ts

import type { 
    IncidentSummaryDto,
    IncidentDetailDto,
    AppendIncidentEventRequest,
    CreateIncidentRequest
} from "../types/incident";

import type {
  SummaryPreviewResponse,
  PostmortemPreviewResponse,
  PublishPostmortemRequest,
  PublishPostmortemResponse,
  ApiError as AiApiError
} from "../types/ai";

const BASE_URL = "/api/incidents";

export type ApiErrorBody =
    | Record<string, unknown>
    | unknown[]
    | string
    | number
    | boolean
    | null;

export class ApiError extends Error {
    public readonly status: number;
    public readonly body?: ApiErrorBody;

    constructor(message: string, status: number, body?: ApiErrorBody) {
        super(message);
        this.name = "ApiError";
        this.status = status;
        this.body = body;
    }
}

async function tryReadJson(response: Response): Promise<ApiErrorBody | undefined> {
    try {
        return (await response.json()) as ApiErrorBody;
    } catch {
        return undefined;
    }
}

async function handleResponse<T>(response: Response): Promise<T> {
    if (response.ok) {
        if (response.status === 204) {
            return undefined as T;
        }
        return (await response.json()) as T;
    }

    const body = await tryReadJson(response);
    throw new ApiError(`Request failed with status ${response.status}`, response.status, body);
}

export async function getIncidents(): Promise<Array<IncidentSummaryDto>> {
    const response = await fetch(BASE_URL, {
        method: "GET",
        headers: { Accept: "application/json" },
    });

    const data = await handleResponse<Array<IncidentSummaryDto>>(response);

    // Map numeric values to enums
    return data
}

export async function getIncidentDetail(id: string): Promise<IncidentDetailDto> {
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: "GET",
        headers: { Accept: "application/json" },
    });

    return handleResponse<IncidentDetailDto>(response);
}

export async function appendIncidentEvent(
    id: string,
    payload: AppendIncidentEventRequest
): Promise<void> {
    const response = await fetch(`${BASE_URL}/${id}/events`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(payload),
    });

    return handleResponse<void>(response);
}

export async function createIncident(payload: CreateIncidentRequest): Promise<string> {
    const response = await fetch(BASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(payload),
    });

    const data = await handleResponse<{ incidentId: string }>(response);
    return data.incidentId; // Return the ID of the newly created incident
}

async function readJsonSafely(res: Response): Promise<unknown> {
  const text = await res.text();
  if (!text) return null;

  try {
    return JSON.parse(text);
  } catch {
    return { message: text } satisfies AiApiError;
  }
}

function throwIfNotOk(res: Response, body: unknown): asserts res is Response {
  if (res.ok) return;
  throw body ?? ({ message: `HTTP ${res.status}` } satisfies AiApiError);
}

export async function previewSummary(incidentId: string): Promise<SummaryPreviewResponse> {
  const res = await fetch(`/api/incidents/${incidentId}/ai/summary/preview`, { method: "POST" });
  const body = await readJsonSafely(res);
  throwIfNotOk(res, body);
  return body as SummaryPreviewResponse;
}

export async function previewPostmortem(incidentId: string): Promise<PostmortemPreviewResponse> {
  const res = await fetch(`/api/incidents/${incidentId}/ai/postmortem/preview`, { method: "POST" });
  const body = await readJsonSafely(res);
  throwIfNotOk(res, body);
  return body as PostmortemPreviewResponse;
}

export async function publishPostmortem(
  incidentId: string,
  payload: PublishPostmortemRequest
): Promise<PublishPostmortemResponse> {
  const res = await fetch(`/api/incidents/${incidentId}/ai/postmortem/publish`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  const body = await readJsonSafely(res);
  throwIfNotOk(res, body);
  return body as PublishPostmortemResponse;
}

