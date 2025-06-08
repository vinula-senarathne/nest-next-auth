## 📦 Environment Variables

### ✅ `apps/api/.env`

This file contains all necessary environment variables for Nest.js application. Create a file named `.env` inside the `apps/api/` directory and add the following variables:

```env
# Database connection URL
DATABASE_URL=your_database_url_here

# JWT configuration
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=1h

# Refresh token configuration
REFRESH_JWT_SECRET=your_refresh_jwt_secret_key
REFRESH_JWT_EXPIRES_IN=7d

# Google OAuth configuration
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=http://localhost:3000/auth/google/callback

```

### ✅ `apps/web/.env`

This file contains environment variables for the Next.js frontend. Create a `.env` file inside the `apps/web/` directory with the following content:

```env
# Backend API URL
BACKEND_URL=http://localhost:4000

# Session secret for authentication/session handling
SESSION_SECRET_KEY=your_session_secret

```

## 🧪 Running Locally

```bash
# Navigate to the root directory of the monorepo
cd nest-next-auth

# Install dependencies
npm install

# Run the turbo repo
npm run dev

```
