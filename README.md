
# RESTful API using Node.js, MongoDB, and Express

This project is a RESTful API built using Node.js, MongoDB as the database, and Express as the web framework. The API allows you to perform CRUD operations (Create, Read, Update, Delete) on a collection of students.


## Project Setup
To set up the project, follow these steps:

- Install Node.js and MongoDB on your machine.
- Create a new directory for your project and navigate to it.
- Initialize a new Node.js project by running the following command:

```bash
  npm init -y

```
- Install the necessary dependencies such as Express and MongoDB driver by running the following command:
```bash
  npm install express mongoose

```
- Install dev dependencies nodemon and dotenv for development purposes:
```bash
  npm install --save-dev nodemon dotenv

```
- Create a .env file in the project's root directory and add the MongoDB connection URL. For example:
```bash
  MONGODB_URL=mongodb://localhost:27017/mydatabase

```
- Create a dbConnect.js file in the db folder to connect to the MongoDB database using mongoose. Use the .env file to retrieve the MongoDB connection URL.
- Create a student.model.js file in the models folder to define the schema for the "students" collection.
- Create a routes.js file in the routes folder to define the API endpoints.
- Create a server.js file in the project's root directory to set up the Express server and start listening on a specific port (e.g., 5500).

## API Endpoints
The API provides the following endpoints:

- ``` GET /students: ``` Fetch all the students from the database.
- ``` GET /students/:id: ``` Fetch a specific student by their ID from the database.
- ``` POST /students: ``` Create a new student in the database.
- ``` PUT /students/:id: ```  Update an existing student in the database.
- ``` DELETE /students/:id: ``` Delete a specific student by their ID from the database.
