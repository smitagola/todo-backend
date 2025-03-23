# Todo Backend API

This is a simple and efficient backend API for managing todos. Built with Node.js, Express.js, and PostgreSQL, it offers secure user authentication and CRUD operations for todos. This project demonstrates clean code practices and can be easily integrated with a frontend application.

---

## 🚀 Live API Endpoint

The API is deployed and accessible at:  
**[Todo Backend API](https://todo-backend-e2gl.onrender.com)**

---

## 🛠️ Features

- **CRUD Operations**: Create, Read, Update, and Delete todos.
- **Authentication**: Secure login and registration using JWT.
- **Password Hashing**: Secure storage of user passwords using bcrypt.
- **Database Integration**: Persistent storage with PostgreSQL.
- **Scalable Design**: Ready to integrate with a frontend or mobile app.

---

## 📦 Tech Stack

- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Fast and minimalist web framework for Node.js.
- **PostgreSQL**: Relational database management system.
- **Render**: Cloud hosting for deploying web applications.
- **bcrypt**: For secure password hashing.
- **JWT**: For stateless user authentication.

---

## 📑 API Endpoints

### **Todos Endpoints**
| Method | Endpoint            | Description                      |
|--------|---------------------|----------------------------------|
| GET    | `/todos`            | Fetch all todos                 |
| GET    | `/todos/:id`        | Fetch a specific todo by ID      |
| POST   | `/todos`            | Create a new todo                |
| PUT    | `/todos/:id`        | Update an existing todo by ID    |
| DELETE | `/todos/:id`        | Delete a todo by ID              |

### **Authentication Endpoints**
| Method | Endpoint            | Description                      |
|--------|---------------------|----------------------------------|
| POST   | `/auth/register`    | Register a new user              |
| POST   | `/auth/login`       | Authenticate and get a JWT token |

---

## 🛠️ Setup for Local Development

### Prerequisites
- Node.js (v18 or above)
- PostgreSQL
- npm (or yarn)

### Steps to Run Locally

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
<<<<<<< HEAD
=======

>>>>>>> 2a9cd4002308998f5166fd4fd6bfe8b7e11c9aec
