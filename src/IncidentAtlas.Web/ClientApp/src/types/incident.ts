// ClientApp/src/types/incident.ts


//export type ApiErrorBody =
//    | Record<string, unknown>
//    | unknown[]
//    | string
//    | number
//    | boolean
//    | null;

//export class ApiError extends Error {
//    public readonly status: number;
//    public readonly body?: ApiErrorBody;

//    constructor(message: string, status: number, body?: ApiErrorBody) {
//        super(message);
//        this.name = "ApiError";
//        this.status = status;
//        this.body = body;
//    }
//}

export class IncidentSummaryDto {
    public readonly incidentId: string
    public readonly title: string
    public readonly severity: number
    public readonly status: number
    public readonly createdAtUtc: Date
    public readonly latestEventAtUtc: Date
    public readonly eventCount: number

    constructor(incidentId: string, title: string, severity: number,
        status: number, createdAtUtc: Date, latestEventAtUtc: Date, eventCount: number)
    {
        this.incidentId = incidentId
        this.title = title
        this.severity = severity
        this.status = status
        this.createdAtUtc = createdAtUtc
        this.latestEventAtUtc = latestEventAtUtc
        this.eventCount = eventCount
    }
}

export class IncidentDetailDto {
    public readonly incidentId: string
    public readonly title: string
    public readonly severity: number
    public readonly status: number
    public readonly createdAtUtc: Date
    public readonly events: Array<IncidentEventDto>

    constructor(incidentId: string, title: string, severity: number,
        status: number, createdAtUtc: Date, events: Array<IncidentEventDto>) {
        this.incidentId = incidentId
        this.title = title
        this.severity = severity
        this.status = status
        this.createdAtUtc = createdAtUtc
        this.events = events
    }
}

export class IncidentEventDto {
    public readonly incidentEventId: string
    public readonly sequence: number
    public readonly occurredAtUtc: Date
    public readonly type: number
    public readonly title: string
    public readonly details?: string
    public readonly createdBy?: string

    constructor(incidentEventId: string, sequence: number, occurredAtUtc: Date,
        type: number, title: string, details?: string, createdBy?: string)
    {
        this.incidentEventId = incidentEventId
        this.sequence = sequence
        this.occurredAtUtc = occurredAtUtc
        this.type = type
        this.title = title
        this.details = details
        this.createdBy = createdBy
    }
}

export class AppendIncidentEventRequest {
    public readonly type: number
    public readonly occurredAtUtc: Date
    public readonly title: string
    public readonly details?: string
    public readonly createdBy?: string

    constructor(type: number, occurredAtUtc: Date, title: string,
        details?: string, createdBy?: string)
    {
        this.type = type
        this.occurredAtUtc = occurredAtUtc
        this.title = title
        this.details = details
        this.createdBy = createdBy
    }
}

export const IncidentEventType = {
    IncidentDeclared: 0,
    NoteAdded: 1,
    StatusChanged: 2,
    Mitigated: 3,
    Resolved: 4,
    Reopened: 5
} as const;

export type IncidentEventType = typeof IncidentEventType[keyof typeof IncidentEventType];

export const IncidentSeverity = {
    Sev0: 0,
    Sev1: 1,
    Sev2: 2,
    Sev3: 3,
    Sev4: 4
} as const;

export type IncidentSeverity = typeof IncidentSeverity[keyof typeof IncidentSeverity];

export const IncidentStatus = {
    Active: 0,
    Mitigated: 1,
    Resolved: 2
} as const;

export type IncidentStatus = typeof IncidentStatus[keyof typeof IncidentStatus];