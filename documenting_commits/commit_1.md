# FSA SCM Backend

This is a backend for supply chain management with user authentication.

## Table of Contents

- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
  - [Register User](#register-user)
  - [Login User](#login-user)
  - [Get User Profile](#get-user-profile)
- [Middleware](#middleware)
  - [customLoginMiddleware](#customloginmiddleware)
  - [verifyToken](#verifytoken)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd fsa-scm-backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Environment Variables

Environment Variables
Create a .env.local file in the root directory and add the following environment variables:

```
PORT=5000
DB_URL=mongodb://localhost:27017/scm-backend
SECRET_KEY=hJetlUVt6O
```

## Running the Application

To run the application in development mode:

```bash
npm run backend-dev
```

To run the application in production mode:

```bash
npm run backend-prod
```

## API Endpoints

Register User

1. `URL: /api/auth/register`
2. Method: `POST`
3. Body:

```
{
  "username": "testuser",
  "password": "testpassword"
}
```

- Response:

```
{
  "message": "User registered successfully",
  "success": true
}
```

## Login User

- URL: `/api/auth/login`
- Method: `POST`
- Body:

```
{
  "username": "testuser",
  "password": "testpassword"
}
```

- Response:

```
{
  "token": "<jwt_token>",
  "message": "LoggedIn Successfully",
  "success": true
}
```

## Get User Profile

-URL: `/api/user/profile`

- Method: `GET`
- Headers:
  - `Authorization: Bearer <jwt_token>`
- Response:

```
{
  "username": "testuser",
  "createdAt": "2023-10-01T00:00:00.000Z",
  "updatedAt": "2023-10-01T00:00:00.000Z"
}
```

## Middleware

#### customLoginMiddleware

This middleware checks if the username and password fields are present in the request body.

verifyToken
This middleware verifies the JWT token provided in the Authorization header.

#### Directory Structure

```
mern-backend/
│
├── config/
│   └── db.js
│
├── src/
│   ├── controllers/
│   │   └── authController.js
│   ├── middlewares/
│   │   ├── authMiddleware.js
│   │   └── customLoginMiddleware.js
│   ├── models/
│   │   └── userModel.js
│   ├── routes/
│   │   └── authRoutes.js
│   └── utils/
│       └── jwtUtils.js
│
├── app.js #entry point
├── package.json
├── .env.local
└── .gitignore
```

### License

This project is licensed under the ISC License.

This `README.md` file provides a comprehensive guide to setting up and using the backend, including the necessary environment variables, how to run the application, and details about the available API endpoints and middleware.
