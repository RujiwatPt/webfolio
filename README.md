# Webfolio

A fullstack web portfolio app built with Vite (React) and Node/Express.

## Features

- Modern React frontend (Vite)
- Express backend API
- Ready for deployment on Render or similar platforms

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

```bash
npm install
```

### Development

Start the backend (and Vite dev server in development):

```bash
npm run dev
```

### Build

Build the frontend for production:

```bash
npm run build
```

### Production Start

Start the server (serves built frontend and API):

```bash
npm start
```

## Deployment (Render)

1. Push your code to GitHub.
2. Create a new Web Service on [Render](https://render.com/):
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm start`
   - **Root Directory:** (leave blank unless your server code is in a subfolder)
3. Make sure your server listens on `process.env.PORT` and `0.0.0.0` (already set up).
4. Add any required environment variables in the Render dashboard.

## License

MIT
