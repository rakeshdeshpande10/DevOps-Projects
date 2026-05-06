# MERN Docker Compose

A simple MERN stack application configured to run with Docker Compose.

This project includes:
- **Frontend**: React + Vite + TailwindCSS
- **Backend**: Node.js + Express + MongoDB
- **Database**: MongoDB running in a Docker container

## Project layout

- `mern/frontend` — React app built with Vite
- `mern/backend` — Express server and MongoDB API routes
- `docker-compose.yaml` — service orchestration for frontend, backend, and MongoDB

## Docker Compose setup

### Prerequisites

- Docker Desktop or Docker Engine
- Docker Compose v2 (`docker compose`) or compatible Docker Compose

### Run with Docker Compose

From the project root:

```bash
docker compose up --build
```

Open the apps in your browser:
- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:5050`
- MongoDB: `mongodb://localhost:27017`

### Stop and remove containers

```bash
docker compose down
```

## Local development without Docker

### Backend

```bash
cd mern/backend
npm install
npm start
```

### Frontend

```bash
cd mern/frontend
npm install
npm run dev
```

## Ports

- `5173` — frontend app
- `5050` — backend server
- `27017` — MongoDB

## Notes

- MongoDB data is persisted using the `mongo-data` Docker volume.
- The backend depends on MongoDB, so Docker Compose starts `mongo` before `backend`.
- The frontend is configured to run on `0.0.0.0` so it is accessible from the host machine inside the container.

## Useful commands

```bash
# Build and start all services
docker compose up --build

# Start in detached mode
docker compose up -d

# Stop and remove containers
docker compose down
```

## License

This repository is provided as-is for learning and experimentation.