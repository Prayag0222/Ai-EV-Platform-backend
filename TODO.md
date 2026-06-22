TODO:
Remove duplicate "vehicle" from route path.

Current:

GET /workspace/:id

Anyone with another ticket ID could try to access it.

Later:

JWT

↓

req.user.id

↓

Verify assigned technician

↓

Return workspace

Much safer.

Put this in V2.