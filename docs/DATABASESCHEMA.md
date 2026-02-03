DATABASE SCHEMA-

Users--
-id(UUID)
-name
-email
-password_hash
-role(RIDER | CAPTAIN | ADMIN)
-created_at


Captains--
-id
-user_id(FK)
-vehicle_number
-kyc_status(PENDING | APPROVED | REJECTED)
-is_online
-wallet_balance

Rides--
-id
-rider_id
-captain_id
-pickup_lat
-pickup_lng
-drop_lat
-drop_lng
-fare
-status
-created_at

Transaction--
-id
-ride_id
-amount
-type(DEBIT | CREDIT)
-status