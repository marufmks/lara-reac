# Laravel React User Management System

A full-stack web application built with Laravel and React for managing users. This project demonstrates a simple CRUD (Create, Read, Update, Delete) operation system with a modern UI.

## Features

- User listing with a responsive table design
- Create new users
- View user details
- Edit existing users
- Delete users
- Modern and clean UI with Bootstrap
- RESTful API backend

## Tech Stack

### Frontend
- React.js
- React Bootstrap
- React Router DOM
- Modern CSS3 with custom properties
- Responsive design

### Backend
- Laravel 10
- MySQL
- RESTful API
- CORS support

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js (v14 or higher)
- PHP (v8.1 or higher)
- Composer
- MySQL
- Git

## Installation

### Backend Setup

1. Clone the repository

```bash
git clone <repository-url>
```

2. Navigate to the project directory

```bash
cd <project-directory>
```
3. Install PHP dependencies
omposer install
4. Create and configure .env file

```bash
cp .env.example .env
```

5. Run the Laravel development server

```bash
php artisan serve
```
### Frontend Setup

1. Navigate to the frontend directory

```bash
cd <project-directory>/frontend
```

2. Install Node.js dependencies

```bash
npm install
``` 

3. Run the React development server

```bash
npm start
```

## Usage

1. Access the application at `http://localhost:5173`
2. Use the navigation menu to:
   - View all users
   - Create new users
   - Edit existing users
   - Delete users

## API Endpoints

- GET `/api/users` - Get all users
- GET `/api/users/{id}` - Get specific user
- POST `/api/users` - Create new user
- PUT `/api/users/{id}` - Update existing user
- DELETE `/api/users/{id}` - Delete user

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details

## Contact

Maruf Khan - marufmks5556@gmail.com

Project Link: [https://github.com/marufmks/lara-reac](https://github.com/marufmks/lara-reac)

## Acknowledgments

- React Bootstrap for UI components
- Laravel for the robust backend framework
- All contributors who have helped this project grow