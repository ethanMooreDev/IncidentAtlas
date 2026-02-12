# Incident Atlas

**Incident Atlas** is a real-time incident record and postmortem system with an AI-assisted analysis layer.  
It maintains an append-only timeline of incident events and uses Azure OpenAI to generate citation-backed summaries and publishable postmortem drafts.

This is not a chatbot. AI acts as a scoped analytical layer over structured incident data with strict schema enforcement and citation validation.

---

## Why This Project Exists

Modern incident management tools often:

- Store unstructured notes  
- Rely on manual postmortem writing  
- Provide AI summaries without evidence grounding  
- Lack auditability around AI-generated output  

Incident Atlas solves this by:

- Enforcing an append-only timeline  
- Structuring all incident events  
- Requiring AI outputs to cite specific timeline events  
- Validating citations server-side  
- Separating preview from publish workflows  
- Enforcing staleness detection before publishing  

The result is an auditable, deterministic AI-assisted incident analysis workflow.

---

## Key Features

### Append-Only Timeline
- Every incident consists of ordered events.
- Events are never edited or deleted.
- Timeline is the source of truth.

### AI Summary
- Generates a concise operational overview.
- Must cite incident events.
- Used for situational awareness.

### AI Postmortem Draft
- Structured markdown draft.
- Citation-backed claims.

### Staleness Enforcement
- Drafts store `inputEventSequenceMax`.
- If new events are appended after generation:
  - Publishing is blocked.
  - User must regenerate.

### Citation Validation
- AI must return JSON matching strict schema.
- Server verifies:
  - All cited `incidentEventId`s exist.
  - Sequences match authoritative timeline.
- Hallucinated references are discarded.

### Optimistic Concurrency
- Append operations respect concurrency rules.
- Publish fails with `409 Conflict` if incident changed.

---

## Architecture

```
React SPA
    |
ASP.NET Core Web (Controllers)
    |
Application Layer (CQRS-style handlers)
    |
Domain Layer (Entities, Enums only)
    |
Infrastructure Layer (EF Core + Azure OpenAI)
    |
Azure SQL
```

### Backend Stack
- ASP.NET Core (latest LTS)
- Controllers (not Minimal APIs)
- EF Core
- Azure SQL
- Azure OpenAI SDK (Structured Outputs)

### Frontend Stack
- React (Vite)
- TypeScript (strict typing)
- Fetch-based API layer
- Markdown rendering via `react-markdown`

---

## AI Design Philosophy

AI is constrained, not creative.

Structured Outputs are enforced via JSON Schema:

- `additionalProperties: false`
- All object properties required
- Nullable fields explicitly declared
- No free-form text outside schema

The model is instructed to:

- Use only provided incident data  
- Cite all significant claims  
- Avoid unsupported conclusions  
- Return JSON only  

The server:

- Validates citation integrity  
- Injects generation metadata  
- Guards against stale publishing  

---

## Example Workflow

1. Create incident  
2. Append events (detection, investigation, mitigation, resolution)  
3. Generate Summary 
4. Generate Postmortem
5. Review citations 

---

## Running the Project

### Prerequisites
- .NET SDK (latest LTS)
- Node.js
- SQL Server / LocalDB
- Azure OpenAI resource (required for AI features)

---

### Backend

From `/src/IncidentAtlas.Web`:

```bash
dotnet restore
dotnet ef database update
dotnet run
```

---

### Frontend

From `/ClientApp`:

```bash
npm install
npm run dev
```

---

## Environment Configuration

`appsettings.Development.json`:

```json
{
  "AzureOpenAI": {
    "Endpoint": "<your-endpoint>",
    "ApiKey": "<your-key>",
    "Deployment": "<your-deployment-name>"
  }
}
```

Never commit secrets.

---

## Design Decisions

### Why Append-Only?
Prevents retroactive history manipulation and simplifies AI reasoning over ordered facts.

### Why Structured Outputs?
Prevents brittle parsing and ensures schema safety.

### Why Preview vs Publish?
AI drafts should be reviewed. Publishing is an explicit, auditable action.

### Why Server-Side Citation Validation?
Models can hallucinate. The server enforces truth.

---

## Future Enhancements

- Authentication & identity-based publishing  
- Persistent postmortem artifacts  
- Integration testing around AI outputs  
- Structured logging & observability  
- Real-time updates (SignalR)  

---

## What This Demonstrates

- Clean architecture principles  
- CQRS-style handler organization  
- Strict TypeScript API typing  
- Defensive AI integration  
- Structured output enforcement  
- Optimistic concurrency handling  
- End-to-end system design  

---

## License

MIT
