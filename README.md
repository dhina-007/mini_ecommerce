# E-Commerce Website (MERN Stack)

## Overview
This is a full-stack eCommerce website built using the MERN (MongoDB, Express.js, React, Node.js) stack. It includes a fully functional backend and frontend, supporting user authentication, product management, and order processing.

## Features
- User Authentication (Login, Register, Logout)
- Product Management (Add, Edit, Delete)
- Shopping Cart & Checkout
- Order Processing
- Payment Integration (Optional)
- Responsive UI

## Technologies Used
- **Frontend:** React, Redux, Bootstrap
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **State Management:** Redux
- **Others:** Axios, Mongoose

## Installation & Setup

### **1. Clone the Repository**
```sh
git clone https://github.com/your-username/ecommerce-mern.git
cd ecommerce-mern
```

### **2. Backend Setup**
Navigate to the backend directory and install dependencies:
```sh
cd backend
npm install
```
Start the backend server:
```sh
nodemon app.js
```

### **3. Frontend Setup**
Navigate to the frontend directory and install dependencies:
```sh
cd frontend
npm install
```
Start the frontend server:
```sh
npm start
```

## Environment Variables
Create a `.env` file in the `backend` directory and add the following variables:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

## Running the App
Once both the frontend and backend are running, open your browser and visit:
```
http://localhost:3000
```

## Contributing
Feel free to submit a pull request if you'd like to improve this project!

## License
This project is licensed under the MIT License.

---
Happy coding! 🚀

