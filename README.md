# DevConnect

A full-stack social networking web application.

## About

DevConnect is a developer-focused social networking platform being built while learning the MERN stack from scratch.

The project aims to allow developers to:

* Create an account
* Log in securely
* Discover other developers
* Create and manage posts
* Like and comment on posts
* Follow other users
* Edit their profiles

The application is being built step by step, starting with user authentication and the core developer experience.


## 🛠 Tech Stack

### Backend
- Node.js
- Express.js

### Frontend 
- React
- React Router
- CSS

### Database 
- MongoDB
- Mongoose

### Authentication 
- JWT
- bcrypt

## Current Progress

### Backend
- Express server setup
- Routing
- Route parameters
- Middleware
- REST APIs
- Complete CRUD operations
- MVC Architecture
- Request logging middleware
- User validation middleware
- MongoDB Atlas integration
- Authentication routes and controllers
- User registration endpoint
- Password hashing with bcrypt
- Duplicate email detection

### Frontend
- React + Vite setup
- React Router setup
- Landing page
- Register page
- Controlled registration form
- Frontend → Backend API integration
- CORS configuration

### Authentication

- User registration
- Password hashing
- Email uniqueness check


### Coming Soon

- Complete login functionality
- JWT-based authentication
- Protected routes
- Developer profiles
- Explore developers
- Posts & comments
- Follow system
- Deployment




## 🎯 Learning Goals

This project focuses on understanding:

- REST APIs
- Backend development with Express
- Database integration
- Authentication
- React development
- Full-stack application architecture

The goal is not just to build one project, but to understand how modern web applications are designed and developed.

## Changelog

### v0.5.0

- Added authentication module structure (`authRoutes` and `authController`).
- Added user registration endpoint (`POST /auth/register`).
- Added duplicate email detection.
- Added password hashing using bcrypt.
- Added secure registration response without exposing the password.
- Added React frontend with React Router.
- Added Register page with controlled form inputs.
- Connected the React registration form to the Express backend.
- Added CORS support for frontend-backend communication.

### v0.4.0
- Connected the backend to MongoDB Atlas using Mongoose.
- Created a `User` model with a Mongoose schema.
- Configured database connection using environment variables (`.env`).
- Migrated all CRUD operations from an in-memory array to MongoDB.
- Updated controllers to use asynchronous database queries with Mongoose.


### v0.3.0

- Added request logging middleware
- Added user validation middleware
- Improved middleware pipeline for POST requests


### v0.2.0

- Refactored backend into MVC architecture
- Moved business logic into controllers
- Added modular route handling
- Separated data into its own module
- Improved project structure and maintainability

### v0.1.0

- Created Express server
- Implemented REST CRUD API
- Added route parameters and middleware

