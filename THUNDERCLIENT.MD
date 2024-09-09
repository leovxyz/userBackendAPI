## Testing API Endpoints with Thunder Client

Thunder Client is a lightweight REST API client extension for VS Code. Here's how to test the UserBackendAPI endpoints:

### Testing Endpoints

#### User Registration
- Method: POST
- URL: http://localhost:5001/api/users/register
- Body (JSON):
  ```json
  {
    "username": "testUser",
    "email": "test@example.com",
    "password": "password123"
  }
  ```

#### User Login
- Method: POST
- URL: http://localhost:5001/api/users/login
- Body (JSON):
  ```json
  {
    "email": "test@example.com",
    "password": "password123"
  }
  ```
- Save the returned access token for authenticated requests. 

#### Get Current User (Protected Route)
- Method: GET
- URL: http://localhost:5001/api/users/current
- Headers:
  - Key: Authorization
  - Value: Bearer <access_token>

#### Create Contact (Protected Route)
- Method: POST
- URL: http://localhost:5001/api/contacts
- Headers:
  - Key: Authorization
  - Value: Bearer <access_token>
- Body (JSON):
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "mobile": "1234567890"
  }
  ```

#### Get All Contacts (Protected Route)
- Method: GET
- URL: http://localhost:5001/api/contacts
- Headers:
  - Key: Authorization
  - Value: Bearer <access_token>

#### Get Single Contact (Protected Route)
- Method: GET
- URL: http://localhost:5001/api/contacts/id
- Headers:
  - Key: Authorization
  - Value: Bearer <access_token>

#### Update Contact (Protected Route)
- Method: PUT
- URL: http://localhost:5001/api/contacts/id
- Headers:
  - Key: Authorization
  - Value: Bearer <access_token>
- Body (JSON):
  ```json
  {
    "name": "Updated Name",
    "email": "updated@example.com",
    "mobile": "9876543210"
  }
  ```

#### Delete Contact (Protected Route)
- Method: DELETE
- URL: http://localhost:5001/api/contacts/id
- Headers:
  - Key: Authorization
  - Value: Bearer <access_token>

### Tips for Using Thunder Client
- Create a collection for your project to organize all requests.
- Use environment variables to store the base URL and access token.
- Use the "Tests" tab to write simple tests for your API responses.