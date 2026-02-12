// ClientApp/src/types/ai.ts

export type Guid = string; // canonical representation from JSON

export interface Citation {
  incidentEventId: Guid;
  sequence: number;

  // Optional fields if you include them in the backend model
  quote?: string | null;
  reason?: string | null;
}

/**
 * Common shape for AI preview responses.
 * You can reuse this for summary + postmortem if both return the same structure.
 */
export interface AiPreviewResult {
  contentMarkdown: string;
  citations: Citation[];

  /**
   * The max event sequence that the AI used to generate this preview.
   * Publish uses this to enforce staleness checks (409 if incident changed).
   */
  inputEventSequenceMax: number;

  /** Optional model identifier, for future Azure OpenAI integration */
  model?: string | null;

  /** When the preview was generated (UTC ISO string) */
  generatedAtUtc: string;
}

export type SummaryPreviewResponse = AiPreviewResult;

export type PostmortemPreviewResponse = AiPreviewResult;

/**
 * Publish request for postmortem.
 * This is the exact preview the user approved.
 */
export interface PublishPostmortemRequest {
  contentMarkdown: string;
  citations: Citation[];
  inputEventSequenceMax: number;
  model?: string | null;
  generatedAtUtc: string;
  publishedBy?: string | null;
}

export interface PublishPostmortemResponse {
  publishedPostmortemId: Guid;
  // If you later return the timeline event id too:
  // publishedEventId?: Guid;
}

/**
 * API error payloads. Your middleware for concurrency returns something like:
 * { error: "concurrency_conflict", message: "..." }
 */
export interface ApiError {
  error?: string;
  message?: string;

  // Allow backend to return additional fields without breaking typing
  [key: string]: unknown;
}

export function isApiError(value: unknown): value is ApiError {
  return typeof value === "object" && value !== null;
}

export function isConcurrencyConflict(value: unknown): value is ApiError {
  return isApiError(value) && value.error === "concurrency_conflict";
}
