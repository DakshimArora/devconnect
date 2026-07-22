# DevConnect

A full-stack social networking web application built while learning the MERN stack from scratch.

## About

DevConnect is a developer-focused social platform where users can:

- Create an account
- Log in securely
- Create and manage posts
- Like and comment on posts
- Follow other users
- Edit their profiles

The project is being built step by step to learn modern full-stack web development.

## 🛠 Tech Stack

### Backend
- Node.js
- Express.js

### Frontend (Coming Soon)
- React
- React Router

### Database 
- MongoDB
- Mongoose

### Authentication (Coming Soon)
- JWT
- bcrypt

## Current Progress

- ✅ Express server setup
- ✅ Routing
- ✅ Route parameters
- ✅ Middleware
- ✅ REST APIs
- ✅ Complete CRUD operations
- ✅ Module system (require and module.exports)
- ✅ MVC Architecture
- ✅ Request logging middleware
- ✅ User validation middleware
- ✅ MongoDB Atlas integration
- ✅ Mongoose ODM
- ✅ Password hashing with bcrypt



### Coming Soon
- ⏳ Authentication (JWT)
- ⏳ React Frontend
- ⏳ User Profiles
- ⏳ Posts & Comments
- ⏳ Deployment



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
- Authentication module structure (`authRoutes` and `authController`).
- User registration endpoint (`POST /auth/register`).
- Password hashing using bcrypt.
- Email uniqueness check before registration.
- Secure registration response without exposing the password.

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

