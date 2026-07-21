# Sri Lanka Government Service Assistant

Full-stack AI-powered web application helping Sri Lankan citizens understand and access government services.

## Architecture

```
User → React Frontend (Vite + Tailwind) → Express REST API → Gemini AI + MongoDB Atlas
```

## Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Frontend** | React 18, Vite, TypeScript, Tailwind CSS, Axios, React Router |
| **Backend** | Node.js, Express.js, REST API |
| **Database** | MongoDB, Mongoose ODM |
| **AI** | Google Gemini API |
| **Auth** | JWT, bcrypt password hashing |
| **Maps** | Google Maps API (office locator) |
| **Voice** | Web Speech API (Speech-to-Text & Text-to-Speech) |

## Project Structure

```
sl-gov-assistant/
├── frontend/          # React + Vite + Tailwind
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── services/    # Axios API client
│   │   ├── context/       # Auth + Language
│   │   └── data/
│   └── package.json
├── backend/           # Express REST API
│   ├── src/
│   │   ├── config/        # MongoDB connection
│   │   ├── models/        # User, ChatSession, GovernmentOffice
│   │   ├── routes/        # auth, chat, services, maps, speech
│   │   ├── controllers/
│   │   ├── middleware/    # JWT auth, validation, errors
│   │   └── services/      # Gemini AI, knowledge base
│   └── package.json
└── package.json       # Root scripts (run both)
```

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB Atlas account (free tier)
- Google Gemini API key ([Google AI Studio](https://aistudio.google.com/))

### 1. Install dependencies

```bash
npm run install:all
```

### 2. Configure environment

**Backend** — copy `backend/.env.example` to `backend/.env`:

```env
PORT=5000
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/sl-gov-assistant
JWT_SECRET=your_secret_key
GEMINI_API_KEY=your_gemini_api_key
FRONTEND_URL=http://localhost:5173
GOOGLE_MAPS_API_KEY=your_maps_key   # optional
```

**Frontend** — copy `frontend/.env.example` to `frontend/.env`:

```env
VITE_API_URL=http://localhost:5000/api
VITE_GOOGLE_MAPS_API_KEY=your_maps_key   # optional
```

### 3. Seed government offices (optional)

```bash
npm run seed
```

### 4. Run development servers

```bash
npm run dev
```

- Frontend: http://localhost:5173
- Backend API: http://localhost:5000/api
- Health check: http://localhost:5000/api/health

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Server status |
| POST | `/api/auth/register` | Register user |
| POST | `/api/auth/login` | Login (returns JWT) |
| GET | `/api/auth/me` | Current user (protected) |
| POST | `/api/chat/message` | Send chat message (Gemini AI) |
| GET | `/api/services` | List all government services |
| GET | `/api/services/:id` | Service detail |
| GET | `/api/maps/offices` | List government offices |
| GET | `/api/maps/offices/nearby` | Nearby offices by lat/lng |
| GET | `/api/faqs` | List/search FAQs |
| GET | `/api/faqs/:id` | FAQ detail |
| GET | `/api/contacts` | Contacts & official links |
| GET | `/api/contacts/emergency` | Emergency contacts only |
| POST | `/api/speech/transcribe` | Submit voice transcription |
| POST | `/api/speech/speak` | Text-to-speech hint (client TTS) |

## Features

- AI chat assistant powered by **Google Gemini**
- **9 government services** with structured guidance
- **Multilingual** UI (English, Sinhala, Tamil)
- **JWT authentication** with chat history persistence
- **Office locator** with Google Maps embeds
- **Voice input** via browser Speech Recognition
- Knowledge base fallback when API keys are not configured
- Rate limiting, input validation, CORS, Helmet security

## Postman Testing

Import these sample requests:

```
POST http://localhost:5000/api/auth/register
Body: { "name": "Test User", "email": "test@example.com", "password": "123456" }

POST http://localhost:5000/api/chat/message
Body: { "message": "How to apply for passport?", "language": "en" }
```

## Disclaimer

This is an **educational university project**. Always verify information with official Sri Lankan government sources.
