
# AI Billing Assistant - Frontend

This is the **Frontend interface** for the AI-powered billing assistant, which connects to a Claude LLM and an API Gateway to interact with a mobile billing system.

## 🌐 Tech Stack

- **Framework**: Next.js (React)
- **Styling**: Tailwind CSS
- **API Communication**: REST (POST requests to API Gateway)
- **LLM Orchestration**: Claude via backend integration

---

## 🚀 Features

- 🧠 Send natural language messages (e.g., "Pay my electricity bill")
- 🤖 Claude interprets the message (intent + parameters)
- 🔁 API Gateway dispatches the intent to the backend
- 💳 Billing API executes the operation (query, pay, etc.)
- 📦 Frontend displays results in a clean, user-friendly UI

---

## 📁 Project Structure

```
/app
  /page.tsx            → main frontend logic
/components
  /BillCard.tsx        → result display card
/public
  /favicon.ico         → icon
/styles
  /globals.css         → Tailwind setup
```

---

## 🧪 Sample Message

```
I want to pay my water bill for May.
```

---

## 📥 API Integration

Make sure your API route (`/api/claude`) forwards the message to your backend which handles:
- Claude request
- Gateway routing
- Response delivery

Expected return format (example):

```json
{
  "billType": "water",
  "subscriberId": 1234,
  "month": 5,
  "year": 2024,
  "amount": 99.90,
  "status": "Paid"
}
```

---

## 👥 Authors

Developed by **Yigit Alp YUKSEL** – SE4458 Assignment 2
