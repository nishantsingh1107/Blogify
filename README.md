# 📝 Blogify - Modern Full-Stack Blogging Platform

A comprehensive MERN stack blogging platform that empowers users to create, share, and discover engaging content with modern web technologies and AI-powered features.

🌐 **Live Demo**: [https://blogifyfrontend-xi.vercel.app/](https://blogifyfrontend-xi.vercel.app/)

<p align="center">
  <img src="https://img.shields.io/github/last-commit/nishantsingh1107/Blogify?style=for-the-badge" alt="Last Commit" />
  <img src="https://img.shields.io/github/languages/top/nishantsingh1107/Blogify?style=for-the-badge&color=yellow" alt="Top Language" />
  <img src="https://img.shields.io/github/languages/count/nishantsingh1107/Blogify?style=for-the-badge" alt="Languages" />
  <img src="https://img.shields.io/github/stars/nishantsingh1107/Blogify?style=for-the-badge" alt="Stars" />
  <img src="https://img.shields.io/github/issues/nishantsingh1107/Blogify?style=for-the-badge&color=red" alt="Issues" />
</p>

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **User Authentication**: Secure JWT-based authentication with bcrypt password hashing
- **Blog Management**: Complete CRUD operations for blog posts with rich text editing
- **AI Content Generation**: Generate blog content using AI integration
- **Image Management**: Upload and manage images with Cloudinary integration
- **User Profiles**: Customizable user profiles with avatar support
- **Email Verification**: OTP-based email verification system
- **Responsive Design**: Modern UI built with React and Tailwind CSS
- **Real-time Updates**: Dynamic content updates and user state management
- **Search & Discovery**: Browse and discover blogs from all users
- **Secure Backend**: RESTful API with middleware authentication and error handling

## 🛠️ Built With

<p align="center">
  <img src="https://img.shields.io/badge/Express-black?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white" />
  <img src="https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white" />
  <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" />
  <img src="https://img.shields.io/badge/Mongoose-red?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/.ENV-ECD53F?style=for-the-badge&logo=dotenv&logoColor=black" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Cloudinary-4285F4?style=for-the-badge&logo=cloudinary&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" />
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" />
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" />
  <img src="https://img.shields.io/badge/React_Quill-FF6B6B?style=for-the-badge&logo=quill&logoColor=white" />
  <img src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
</p>

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library with hooks and context
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **React Quill** - Rich text editor for blog content
- **Axios** - HTTP client for API requests
- **React Toastify** - Toast notifications
- **React Icons** - Icon library
- **React Spinners** - Loading indicators
- **Headless UI** - Unstyled, accessible UI components

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database with Mongoose ODM
- **JWT** - JSON Web Tokens for authentication
- **bcrypt** - Password hashing
- **Cloudinary** - Cloud-based image management
- **Nodemailer** - Email sending capabilities
- **Multer** - File upload handling
- **Morgan** - HTTP request logger

## 📁 Project Structure

```
Blogify/
├── Backend/                    # Backend Node.js application
│   ├── api/
│   │   └── v1/
│   │       ├── middleware.js   # Authentication middleware
│   │       ├── routes.js       # Main API routes
│   │       ├── auth/           # Authentication endpoints
│   │       ├── blogs/          # Blog CRUD operations
│   │       ├── users/          # User management
│   │       ├── all-blogs/      # Public blog endpoints
│   │       └── Generate/       # AI content generation
│   ├── config/
│   │   ├── cloudinary.js       # Cloudinary configuration
│   │   └── db.js              # Database connection
│   ├── models/
│   │   ├── blogSchema.js       # Blog data model
│   │   ├── userSchema.js       # User data model
│   │   └── otpSchema.js        # OTP verification model
│   ├── utils/
│   │   ├── controllerHelpers.js
│   │   ├── emailHelpers.js
│   │   └── jwtHelpers.js
│   ├── app.js                  # Express application setup
│   └── package.json
└── Frontend/                   # Frontend React application
    ├── src/
    │   ├── components/         # Reusable UI components
    │   │   └── navbar.jsx
    │   ├── pages/              # Application pages
    │   │   ├── HomePage.jsx
    │   │   ├── CreateBlogPage.jsx
    │   │   ├── EditBlogPage.jsx
    │   │   ├── ViewBlogPage.jsx
    │   │   ├── MyBlogsPage.jsx
    │   │   ├── ProfilePage.jsx
    │   │   ├── LoginPage.jsx
    │   │   ├── SignupPage.jsx
    │   │   ├── AboutPage.jsx
    │   │   └── NotFoundPage.jsx
    │   ├── contexts/           # React Context API
    │   │   └── appContext.jsx
    │   ├── axios/              # HTTP client setup
    │   │   └── axiosInstance.js
    │   ├── utils/              # Utility functions
    │   │   └── toastHelper.js
    │   ├── assets/             # Static assets
    │   ├── App.jsx             # Main application component
    │   └── main.jsx            # Application entry point
    ├── public/
    └── package.json
```

## 🚀 Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account or local MongoDB
- Cloudinary account for image management
- Email service for OTP verification

### Clone the Repository
```bash
git clone https://github.com/nishantsingh1107/Blogify.git
cd Blogify
```

### Backend Setup
```bash
cd Backend
npm install
```

### Frontend Setup
```bash
cd Frontend
npm install
```

## 🔧 Environment Variables

### Backend (.env)
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRATION=7d

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Email Configuration
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password

# Frontend URL
FRONTEND_URL=http://localhost:5173
```

### Frontend (.env)
```env
VITE_BACKEND_URL=http://localhost:5000
```

## 💻 Usage

### Development Mode

1. **Start the Backend Server**
```bash
cd Backend
npm run dev
```

2. **Start the Frontend Development Server**
```bash
cd Frontend
npm run dev
```

3. **Access the Application**
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

### Production Build

1. **Build the Frontend**
```bash
cd Frontend
npm run build
```

2. **Start the Production Server**
```bash
cd Backend
npm run prod
```

## 🔗 API Endpoints

### Authentication
- `POST /api/v1/auth/register` - User registration
- `POST /api/v1/auth/login` - User login
- `POST /api/v1/auth/verify-otp` - OTP verification
- `POST /api/v1/auth/resend-otp` - Resend OTP

### Users (Protected Routes)
- `GET /api/v1/users/profile` - Get user profile
- `PUT /api/v1/users/profile` - Update user profile
- `POST /api/v1/users/upload-avatar` - Upload profile picture

### Blogs (Protected Routes)
- `GET /api/v1/blogs` - Get user's blogs
- `POST /api/v1/blogs` - Create new blog
- `GET /api/v1/blogs/:id` - Get specific blog
- `PUT /api/v1/blogs/:id` - Update blog
- `DELETE /api/v1/blogs/:id` - Delete blog

### Public Blogs
- `GET /api/v1/all-blogs` - Get all public blogs
- `GET /api/v1/all-blogs/:id` - Get specific public blog

### AI Content Generation
- `POST /api/v1/generate-content` - Generate AI blog content

## 🎯 Key Features Explained

### Authentication System
- JWT-based authentication with secure token management
- Password hashing using bcrypt
- Email verification with OTP system
- Protected routes with middleware authentication

### Blog Management
- Rich text editor with React Quill
- Image upload and management via Cloudinary
- CRUD operations for blog posts
- Public and private blog viewing

### User Experience
- Responsive design for all screen sizes
- Real-time notifications with toast messages
- Loading states and error handling
- Intuitive navigation and user interface
- Context-based state management

### AI Integration
- AI-powered content generation for blogs
- Intelligent content suggestions
- Enhanced writing assistance

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 🙏 Acknowledgments

- [MongoDB](https://www.mongodb.com/) for the database solution
- [Cloudinary](https://cloudinary.com/) for image management
- [React Quill](https://github.com/zenoamaro/react-quill) for rich text editing
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Vite](https://vitejs.dev/) for the build tool

---

Project Link: [https://github.com/nishantsingh1107/Blogify](https://github.com/nishantsingh1107/Blogify)

---

⭐ **Star this repository if you found it helpful!** ⭐
