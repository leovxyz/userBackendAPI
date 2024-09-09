## Project Overview

UserBackendAPI is a Node.js-based backend API for user management and data handling. It uses Express.js as the web framework and MongoDB for data storage.

## Directory Structure

- `/config`: Contains database configuration
- `/constants`: Defines constant values used across the application
- `/controllers`: Handles the business logic for different routes
- `/middleware`: Contains custom middleware functions
- `/models`: Defines MongoDB schemas
- `/routes`: Defines API routes

## Key Components

### Server Setup
The main server setup is in `server.js`. It initializes the Express app, connects to the database, and sets up routes and middleware.

### Database Connection
Database connection is managed in `config/dbConnection.js`.

### Models
The application uses two main models:
1. User Model (`models/userModel.js`)
2. Contact Model (`models/contactModel.js`)

### Controllers
There are two main controllers:
1. User Controller (`controllers/userController.js`): Handles user registration, login, and current user info.
2. Contact Controller (`controllers/contactController.js`): Manages CRUD operations for contacts.

### Routes
1. User Routes (`routes/userRoutes.js`): Defines endpoints for user-related operations.
2. Contact Routes (`routes/contactRoutes.js`): Defines endpoints for contact-related operations.

### Middleware
1. Error Handler (`middleware/errorHandler.js`): Centralized error handling.
2. Token Validator (`middleware/validateTokenHandler.js`): Validates JWT for protected routes.

## Authentication
The application uses JWT (JSON Web Tokens) for authentication. Tokens are generated upon login and validated for protected routes.

## Error Handling
Custom error handling is implemented using `errorHandler.js`, which provides meaningful error responses based on different error types.

## Dependencies
Key dependencies include:
- express: Web framework
- mongoose: MongoDB object modeling
- bcrypt: Password hashing
- jsonwebtoken: JWT implementation
- dotenv: Environment variable management

For a full list of dependencies, refer to `package.json`.
