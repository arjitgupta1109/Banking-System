
# 🏦 Banking Information System

A vibrant, full-stack web application for managing basic banking information. Users can create new accounts and view a list of all existing accounts, with data stored securely in an SQLite database.

---

## 🚀 Features

- Create a new account with name, email, and initial balance
- View a dynamic list of all accounts
- Backend REST API using Node.js + Express
- SQLite database integration
- Responsive and colorful UI with HTML, CSS, and JavaScript

---

#  Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: SQLite
- **Other Tools**: CORS, body-parser

---

## 📁 Project Structure

```
banking-system/
├── public/
│   ├── index.html       # Main frontend file
│   ├── style.css        # Vibrant styling
│   └── script.js        # Frontend logic
├── db.js                # SQLite database setup
├── server.js            # Express server
├── package.json         # Node dependencies
└── README.md
```

---

## 🛠️ Setup Instructions

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/banking-info-system.git
cd banking-info-system
```

2. **Install dependencies:**

```bash
npm install
```

3. **Start the server:**

```bash
node server.js
```

4. **Visit in browser:**

```
http://localhost:3000
```

---

## 📦 API Endpoints

| Method | Endpoint         | Description             |
|--------|------------------|-------------------------|
| POST   | `/api/accounts`  | Create new account      |
| GET    | `/api/accounts`  | Get all account records |

---

## 📝 Example Account JSON

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "balance": 5000
}
```

---

## 💡 Future Enhancements

- Login & authentication
- Deposit / withdraw functionality
- Account deletion
- Transfer between accounts
- Transaction history

---

## 👨‍💻 Author

Arjit Gupta – Full Stack Developer Intern  
*B.Tech CSE Core @ VIT Vellore*
