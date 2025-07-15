🚍 Cloud-Based Bus Pass System
This project is built as part of my CodeAlpha internship (Task 3) in the domain of Cloud Computing & Information Security. It is a secure, scalable backend system for managing online bus pass registrations and bookings, deployed on cloud platforms like Render and Replit.

📌 Features
🧾 User Registration with Capability ID

🎫 Booking endpoint to generate Ticket ID

🗃️ SQLite database for local data persistence

🧠 Modular code with Express.js, Node.js

🔐 Environment variable-based secret handling

🌐 Cloud Deployment (Render / Replit)

🏗️ Project Structure
bash
Copy code
task-3-cloud-bus-pass/
├── src/
│   ├── app.js              # Main server file
│   ├── db.js               # SQLite DB schema & connection
│   ├── capability.js       # Generates unique capabilities (UUID)
│   └── encrypt.js          # Optional encryption logic
├── package.json
├── .env                    # Environment variables (not committed)
🛠️ Technologies Used
Node.js

Express.js

SQLite3

UUID

dotenv

Render / Replit (for deployment)

🚀 Deployment
The app can be deployed on:

Render (via GitHub auto-deploy)

Replit (upload zipped folder and configure environment variables)

Add environment variables:

Key	Value
PORT	3000 (or Render assigned port)
SECRET_KEY	12345678901234567890123456789012

Start command:

bash
Copy code
node src/app.js
📮 API Endpoints
1. Register (POST /register)
Registers a user and returns a capability code.

Request:

json
Copy code
{
  "username": "anurag",
  "password": "mypassword"
}
Response:

json
Copy code
{
  "success": true,
  "capability": "your-uuid-code"
}
—

2. Booking (POST /booking)
Book a bus pass with your capability code.

Request:

json
Copy code
{
  "username": "anurag",
  "capability": "your-uuid-code",
  "source": "Delhi",
  "destination": "Lucknow"
}
Response:

json
Copy code
{
  "success": true,
  "ticket_id": "BUS-2f9d8e9e"
}
—

🧪 Testing with curl
Register user:

bash
Copy code
curl -X POST https://your-app-url/register \
  -H "Content-Type: application/json" \
  -d '{"username":"anurag", "password":"mypassword"}'
Book ticket:

bash
Copy code
curl -X POST https://your-app-url/booking \
  -H "Content-Type: application/json" \
  -d '{"username":"anurag", "capability":"uuid-code", "source":"Delhi", "destination":"Lucknow"}'
—

📂 Database
SQLite used for local testing & simplicity

Table created: users (id, username, password, capability)

You can open it using:

bash
Copy code
sqlite3 user.db
.tables
SELECT * FROM users;
—

✅ Status
✅ Fully working backend
✅ Live deployed
✅ Secure POST endpoints
✅ Easy to scale

—

📎 GitHub Repository
🔗 https://github.com/anurag7654/Task-3-Cloud-BasedBusPassSystem