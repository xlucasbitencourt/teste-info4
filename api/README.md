# Task Manager api

## Description
This is a simple task manager api that allows users to create, read, update and delete tasks. 

## Technologies
- Java
- Spring Boot
- Spring Data JPA
- H2 Database
- Maven

## How to run
1. Clone the repository
2. Run the following command in the root directory of the project
```
mvn spring-boot:run
```
3. The application will be running on `http://localhost:8080`

## Endpoints
- GET `/tasks` - Get all tasks
- POST `/tasks` - Create a new task
- GET `/tasks/{id}` - Get a task by id
- PUT `/tasks/{id}` - Update a task by id
- DELETE `/tasks/{id}` - Delete a task by id

The api is necessary to run the frontend of the Task Manager project. You can find the frontend at the `app` folder.