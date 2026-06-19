# VoltOps Changelog

## v0.2 Foundation Refactor

- Added TicketStatus enum
- Added TicketPriority enum
- Added TechnicianSpecialization enum
- Removed customer.vehicleModel
- Customer -> Vehicle normalized
- Added Invoice -> RepairTicket relation
- Added RepairTicket -> Invoice relation