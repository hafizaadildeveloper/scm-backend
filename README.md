# FSA SCM Backend

This is a backend for supply chain management with user authentication.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Middleware](#middleware)
- [Models](#models)
- [Utilities](#utilities)

## Installation

1. Clone the repository:

   ```sh
   git clone <repository-url>
   cd fsa-scm-backend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

## Configure

Create a [.env](http://_vscodecontentref_/0) file in the root directory and add the following environment variables:

```env
PORT=5000
DB_URL=mongodb://localhost:27017/scm-backend
JWT_SECRET_KEY=your_secret_key_here
```

## Running the Application

To start the application in development mode:

```bash
npm run dev-backend
```

To start the application in production mode:

```bash
npm run prod-backend
```

## Project Structure

```
supply-chain-management-backend/
│
├── config/
│   └── db.js
│
├── src/
│   ├── controllers/
│   │   ├── authController.js
│   │   └── userCtrl.js
│   │
│   ├── middlewares/
│   │   ├── authMiddleware.js
│   │   └── customLoginMiddleware.js
│   │
│   ├── models/
│   │   ├── distributorModel.js
│   │   └── userModel.js
│   │
│   ├── routers/
│   │   ├── authentication.js
│   │   └── routes.js
│   │
│   └── utils/
│       ├── auth.js
│       └── constants.js
│
├── .env
├── .gitignore
├── package.json
└── server.js
```

<!-- Register User

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
``` -->

## API Endpoints

Authentication Routes

- POST: `/api/v1/auth/register`
  - Registers a new user.
  - Request body:

```
{
    "fullName": "John Doe",
    "userName": "johndoe",
    "password": "password123",
    "role": "DISTRIBUTOR",
    "email": "johndoe@example.com",
    "phone": "1234567890"
}
```

- POST: `/api/v1/auth/login`
  - Logs in a user.
  - Request body:

```
{
    "email": "johndoe@example.com",
    "password": "password123"
}
```

- POST: `/api/v1/auth/reset-password`
  - Reset's the user's password.
  - Request body:

```
{
    "email": "johndoe@example.com",
    "password": "newpassword123"
}
```

Protected Routes

- GET /api/v1/auth/profile
  - Returs the profile of the logged-in user.
  - Requires a valid JWT token in the `Authorizaiton` header.

## Middleware

`authMiddleware.js`

- **verifyToken**: Verifies the JWT token in the `Authorization` header.

`customLoginMiddleware.js`

- **customLoginMiddleware**: Ensures that the _username_ and _password_ fields are present in the request body.

## Models

`userModle.js`
Define the schema for the _User_ model.
`distributorModel.js`
Define the schema for the _Distributor_ model.

## Utilities

`auth.js`

- **hashPassword**: Hashes a password using bcrypt.
- **comparePass**: Compares a plain text password with a hashed password.
- **generateToken**: Generates a JWT token.
- **authenticate**: Middleware to authenticate a user.
- **isDistributor**: Middleware to check if the user is a distributor.
- **isRetailer**: Middleware to check if the user is a retailer.

`constants.js`

Defines constants used in the application, such as user roles.

### License

This project is licensed under the ISC License.
