==== README.md ====
# GangaExpressway.org (GEW)
Property listing platform connecting buyers and sellers of plots along the Ganga Expressway.

## Quick start
```bash
git clone <repo>
cd GEW
# start database
docker-compose up -d
# backend
cd backend && npm install && npx prisma migrate dev --name init && npm run dev
# frontend (new terminal)
cd ../frontend && npm install && npm run dev
```
Open http://localhost:5173

## Stack
* React + Vite + TailwindCSS (frontend)
* Node.js 18 + Express + Prisma (backend)
* PostgreSQL 15 (Docker)
* Docker Compose for dev