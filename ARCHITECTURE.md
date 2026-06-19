# VoltOps Architecture

## Core Philosophy

RepairTicket is the central business entity.

Customer
    │
    ▼
Vehicle
    │
    ▼
RepairTicket
    ├── TechnicianNote[]
    ├── TimelineEvent[]
    ├── UsedPart[]
    └── Invoice

## Relationships

Customer -> Vehicle (1:N)

Vehicle -> RepairTicket (1:N)

RepairTicket -> TechnicianNote (1:N)

RepairTicket -> TimelineEvent (1:N)

RepairTicket -> UsedPart (1:N)

RepairTicket -> Invoice (1:1)

## Rules

- Vehicle table is the single source of truth.
- Customer does NOT store vehicleModel.
- One repair generates one invoice.
- AI should enhance the workflow, not replace it.