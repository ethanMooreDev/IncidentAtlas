// ClientApp/src/api/incidentApi.ts

import type { IncidentSummaryDto } from "../types/incident";

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

export async function getIncidentDetail<T = unknown>(id: string): Promise<T> {
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: "GET",
        headers: { Accept: "application/json" },
    });

    return handleResponse<T>(response);
}

export async function appendIncidentEvent<TResponse = unknown, TPayload = unknown>(
    id: string,
    payload: TPayload
): Promise<TResponse> {
    const response = await fetch(`${BASE_URL}/${id}/events`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(payload),
    });

    return handleResponse<TResponse>(response);
}
