# Rapido Web – API Contract

## Base URL
/ api / v1

## Authentication APIs

### POST /auth/register
Registers a new user.

Request:
{
  name,
  email,
  password,
  role
}

Response:
{
  user_id,
  token
}

---

### POST /auth/login
Logs in a user.

Request:
{
  email,
  password
}

Response:
{
  token
}

---

## Ride APIs

### POST /rides
Creates a new ride request.

Request:
{
  pickup_lat,
  pickup_lng,
  drop_lat,
  drop_lng
}

Response:
{
  ride_id,
  fare,
  status
}

---

### POST /rides/:id/accept
Captain accepts a ride.

Response:
{
  status: "ACCEPTED"
}

---

### POST /rides/:id/start
Marks ride as started.

Response:
{
  status: "STARTED"
}

---

### POST /rides/:id/complete
Marks ride as completed.

Response:
{
  status: "COMPLETED"
}

## Captain APIs

### POST /captain/online
Marks captain as online.

### POST /captain/offline
Marks captain as offline.


## Admin APIs

### GET /admin/captains
List captains.

### POST /admin/captains/:id/approve
Approve captain KYC.


## Error Codes

400 – Bad request  
401 – Unauthorized  
403 – Forbidden  
404 – Not found  
500 – Server error

