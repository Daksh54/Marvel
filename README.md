# QuickShow - Marvel Cinematic Universe Hub 🎬🦸‍♂️

Welcome to **QuickShow**, a stunning, production-ready cinematic hub designed to showcase movies, trailers, and theater releases with premium aesthetics.

This project was meticulously built as a scalable, high-performance web application, featuring a pixel-perfect React frontend and a robust Node.js backend capable of handling heavy concurrent traffic.

---

## ✨ Features

- **Stunning UI/UX**: An immersive, dynamic user interface built with Tailwind CSS.
- **Micro-Animations**: Smooth, professional-grade entrance and hover animations powered by Framer Motion.
- **Secure Authentication**: Integrated Google Sign-In using Firebase Authentication.
- **Global Auth State**: Seamlessly transforms navigation (Login -> User Profile Avatar) using React Context.
- **Dynamic Routing**: Full application routing using `react-router-dom` (Home, Movies, Catalog, Movie Details, Profile).
- **High Concurrency Backend**: A Node.js backend equipped with robust Redis-backed Rate Limiting to comfortably handle up to 10,000+ concurrent users securely.
- **Unified Deployment**: The Express server automatically serves the compiled static frontend files in production.
- **Dockerized**: Fully containerized setup (Frontend, Backend, and Redis) using Docker and Docker Compose.

---

## 🛠️ Technology Stack

### Frontend
- **React.js** (via Vite)
- **Tailwind CSS** (for Utility-First Styling)
- **Framer Motion** (for Advanced Animations)
- **React Router v6** (for Navigation)
- **Firebase Auth** (for Google Authentication)
- **React Icons** (for Typography/Icons)

### Backend
- **Node.js & Express.js v5**
- **Redis & rate-limit-redis** (for horizontal scalability and DDoS protection)
- **express-rate-limit** (for robust API protection)

### DevOps & Tooling
- **Docker & Docker Compose** (for multi-stage builds and isolated environments)

---

## 🚀 Getting Started (Local Development)

### Prerequisites
- Node.js (v18+)
- Redis (Optional for local dev, defaults to memory store if unavailable)
- Firebase Project Setup (for Authentication)

### 1. Clone the Repository
```bash
git clone https://github.com/Daksh54/Marvel.git
cd Marvel
```

### 2. Environment Setup
Navigate to the `frontend` folder and create a `.env` file:
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### 3. Start the Frontend
```bash
cd frontend
npm install
npm run dev
```

### 4. Start the Backend API (Optional in Dev)
```bash
cd backend
npm install
npm start
```
*(Note: If you don't have Redis installed locally, the backend will safely fallback to an in-memory rate limiter without crashing!)*

---

## 🐳 Docker Deployment (Production Ready)

To simulate or run the production environment (which unifies the frontend, backend, and a dedicated Redis database), ensure **Docker Desktop** is running.

1. Build and start the containers in detached mode:
```bash
docker compose up --build -d
```
2. The application is now live at: `http://localhost:5000`

### What happens in Docker?
- **Stage 1**: A Node.js Alpine container installs frontend dependencies and runs `npm run build` using Vite.
- **Stage 2**: The backend container installs its dependencies, securely copies the static `dist` folder from Stage 1, and starts the Express server.
- **Redis Container**: A dedicated Redis container is spun up. The backend connects to it via the `REDIS_URL` environment variable for robust, scalable API rate-limiting.

---

## 📂 Project Structure

```text
Marvel/
├── backend/                  # Express API Server
│   ├── package.json
│   └── server.js             # Rate-limiting, static serving, auth endpoints
├── frontend/                 # React UI Application
│   ├── public/               # Images and SVGs
│   ├── src/
│   │   ├── api/              # Backend connection logic
│   │   ├── components/       # Hero, Navbar, MovieGrid, Trailers, Footer
│   │   ├── context/          # Global AuthContext provider
│   │   ├── firebase/         # Firebase initialization
│   │   ├── pages/            # Home, Login, Profile, MovieCatalog, MovieDetails
│   │   └── App.jsx           # Main Router logic
│   ├── vite.config.js        
│   └── tailwind.config.js    
├── docker-compose.yml        # Docker Compose config for App + Redis
└── Dockerfile                # Multi-stage production build blueprint
```

---

## 💡 Future Enhancements
- Expand backend endpoints to serve dynamic movie data from a database (e.g., MongoDB, PostgreSQL) instead of hardcoding data on the frontend.
- Implement token-based Session Cookies for Server-Side Rendering (SSR) persistence.
- Stripe integration for simulated "Buy Ticket" functionality.
