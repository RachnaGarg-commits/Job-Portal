# 🚀 JobSphere — Job Portal

**JobSphere** is a full-stack MERN Job Portal that connects job seekers with recruiters.

Job seekers can create profiles, search and filter jobs, view job details, and apply for jobs. Recruiters can create companies, post job openings, view applicants, and manage application statuses.

---

## 🌐 Live Demo

### 🔗 Frontend
https://job-portal-ebon-nu.vercel.app

### 🔗 Backend API
https://job-portal-backend-v9vv.onrender.com

---

## ✨ Features

### 👨‍💻 For Job Seekers

- 🔐 User registration and login
- 👤 Profile management
- 📄 Resume upload
- 🔎 Search jobs by keyword
- 📍 Filter jobs by location
- 💼 Filter jobs by industry
- 💰 Filter jobs by salary
- 📋 View detailed job descriptions
- 📝 Apply for jobs
- 📊 View applied jobs
- 🚫 Prevent duplicate job applications
- 🔔 Success and error notifications

### 🏢 For Recruiters

- 🔐 Recruiter registration and login
- 🏢 Create companies
- 🖼️ Upload company logos
- ✏️ Update company information
- 📢 Post new jobs
- 📋 View posted jobs
- 👥 View job applicants
- 🔄 Update application status
- 🔐 Protected recruiter routes

### 🔒 Authentication & Security

- JWT-based authentication
- HTTP-only cookies
- Password hashing using bcrypt
- Role-based access control
- Protected API routes
- CORS configuration
- Environment variables for sensitive credentials

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- Tailwind CSS
- Redux Toolkit
- React Router
- Axios
- Framer Motion
- Lucide React
- Sonner

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- Multer
- Cloudinary
- Cookie Parser
- CORS

### Deployment & Services

- **Frontend:** Vercel
- **Backend:** Render
- **Database:** MongoDB Atlas
- **File Storage:** Cloudinary
- **Version Control:** Git & GitHub

---

## 🏗️ Project Architecture

```text
                    ┌─────────────────────┐
                    │       User          │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │      Vercel         │
                    │   React + Vite      │
                    │     Frontend        │
                    └──────────┬──────────┘
                               │
                         REST API / Axios
                               │
                               ▼
                    ┌─────────────────────┐
                    │       Render        │
                    │  Node + Express.js  │
                    │      Backend        │
                    └───────┬─────┬───────┘
                            │     │
                ┌───────────┘     └────────────┐
                ▼                              ▼
       ┌─────────────────┐            ┌─────────────────┐
       │  MongoDB Atlas  │            │   Cloudinary    │
       │    Database     │            │ Image/File      │
       │                 │            │ Storage         │
       └─────────────────┘            └─────────────────┘
📂 Project Structure
Job-Portal/
│
├── backend/
│   ├── controllers/
│   │   ├── application.controller.js
│   │   ├── company.controller.js
│   │   ├── job.controller.js
│   │   └── user.controller.js
│   │
│   ├── middlewares/
│   │   ├── isAuthenticated.js
│   │   └── multer.js
│   │
│   ├── models/
│   │   ├── application.model.js
│   │   ├── company.model.js
│   │   ├── job.model.js
│   │   └── user.model.js
│   │
│   ├── routes/
│   │   ├── application.route.js
│   │   ├── company.route.js
│   │   ├── job.route.js
│   │   └── user.route.js
│   │
│   ├── utils/
│   │   ├── cloudinary.js
│   │   ├── datauri.js
│   │   └── db.js
│   │
│   ├── index.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── public/
│   │
│   ├── src/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── redux/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── .env
│   ├── jsconfig.json
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
⚙️ Local Installation
1. Clone the repository
git clone https://github.com/RachnaGarg-commits/Job-Portal.git

Navigate into the project:

cd Job-Portal
🔧 Backend Setup

Navigate to the backend:

cd backend

Install dependencies:

npm install

Create a .env file inside the backend folder:

PORT=3000

MONGO_URI=your_mongodb_connection_string

SECRET_KEY=your_secret_key

FRONTEND_URL=http://localhost:5173

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name

CLOUDINARY_API_KEY=your_cloudinary_api_key

CLOUDINARY_API_SECRET=your_cloudinary_api_secret

Start the backend:

npm start

The backend will run at:

http://localhost:3000
💻 Frontend Setup

Open another terminal.

Navigate to the frontend:

cd frontend

Install dependencies:

npm install

Create a .env file inside the frontend folder:

VITE_API_BASE_URL=http://localhost:3000/api/v1

Start the development server:

npm run dev

The frontend will run at:

http://localhost:5173
🔑 Environment Variables
Backend
Variable	Description
PORT	Port used by the Express server
MONGO_URI	MongoDB Atlas connection string
SECRET_KEY	Secret key used for JWT authentication
FRONTEND_URL	Frontend URL used for CORS
CLOUDINARY_CLOUD_NAME	Cloudinary cloud name
CLOUDINARY_API_KEY	Cloudinary API key
CLOUDINARY_API_SECRET	Cloudinary API secret
Frontend
Variable	Description
VITE_API_BASE_URL	Base URL of the backend API

🔄 API Structure

The backend provides REST API endpoints for users, jobs, companies, and applications.

User
/api/v1/user
Jobs
/api/v1/job
Companies
/api/v1/company
Applications
/api/v1/application
📋 Main Application Flow
Job Seeker
Register
   ↓
Login
   ↓
Browse Jobs
   ↓
Search / Filter
   ↓
View Job
   ↓
Apply
   ↓
Track Applications
Recruiter
Register
   ↓
Login
   ↓
Create Company
   ↓
Post Job
   ↓
View Applicants
   ↓
Update Application Status
☁️ Deployment

JobSphere is deployed using:
Frontend  → Vercel
Backend   → Render
Database  → MongoDB Atlas
Storage   → Cloudinary
Production Frontend
https://job-portal-ebon-nu.vercel.app
Production Backend
https://job-portal-backend-v9vv.onrender.com

The production frontend communicates with the backend using:
VITE_API_BASE_URL=https://job-portal-backend-v9vv.onrender.com/api/v1

The backend allows requests from the deployed Vercel frontend using:
FRONTEND_URL=https://job-portal-ebon-nu.vercel.app

Some features planned for future versions:

🔔 Email notifications
💾 Save jobs for later
📊 Recruiter analytics dashboard
🤖 AI-powered job recommendations
📄 Resume parsing
🔎 More advanced job search
📈 Application tracking dashboard
🛠️ Admin dashboard
📱 Improved mobile responsiveness
🔐 Additional authentication improvements
🎯 Learning Outcomes

This project helped me gain practical experience with:

Building a full-stack MERN application
REST API development
React component architecture
State management using Redux Toolkit
Authentication using JWT
Password hashing
MongoDB and Mongoose
File uploads using Multer
Cloudinary integration
Role-based authorization
API integration using Axios
CORS configuration
Environment variable management
Git and GitHub
Deploying a frontend using Vercel
Deploying a Node.js backend using Render
Connecting a deployed application with MongoDB Atlas

👩‍💻 Author
Rachna Garg
B.Tech Computer Science Engineering Student

GitHub
https://github.com/RachnaGarg-commits#:~:text=Rachna%20Garg,RachnaGarg%2Dcommits

LinkedIn
https://www.linkedin.com/in/rachna-garg-321994363?utm_source=share_via&utm_content=profile&utm_medium=member_android

⭐ Support
If you found this project useful or interesting, consider giving the repository a ⭐ on GitHub.
