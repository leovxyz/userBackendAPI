# UserBackendAPI

UserBackendAPI is a Node.js-based backend API for user management and data handling. It uses Express.js as the web framework and MongoDB for data storage. It has a comprehensive set of features for managing user accounts and their associated data.

## Key Components

The API is designed with a focus on:

- **User Management**: Handles user registration, authentication, and profile management.
- **Contact Management**: Allows users to create, read, update, and delete contact information.
- **JWT Authentication**: Secures API endpoints using JSON Web Tokens.
- **Database Integration**: Utilizes MongoDB for efficient data storage and retrieval.


## Features

- User registration
- User login
- JWT Authentication
- Create Contact
- Get Contacts
- Get Contact
- Update Contact
- Delete Contact

## Technologies Used

- Node.js
- Express.js
- MongoDB
- JWT for authentication
- bcrypt for password hashing

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- MongoDB

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/leovxyz/UserBackendAPI.git
   ```

2. Install dependencies:
   ```bash
   cd UserBackendAPI
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:
   ```bash
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/userbackendapi
   JWT_SECRET=your_jwt_secret_key
   ```

4. Start the server:
   ```bash
   npm run dev
   ```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

-

/ Leo