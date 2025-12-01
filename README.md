# 🎬 MyMovieList

MyMovieList is a modern web application to explore trending movies and TV shows in real time using the TMDb API.  
Built with the T3 stack (Next.js, TypeScript, Tailwind, tRPC, Prisma, NextAuth), it offers a fast, clean and secure browsing experience.

---

## 🚀 Features

- 🔍 **Browse trends, latest releases & popular movies/series** (live TMDb API)
- 🎨 **Fast & responsive UI** using Next.js, React, TailwindCSS & Shadcn UI
- 🔐 **Authentication with multiple providers**  
  - Google OAuth  
  - Magic Link (Mailgun)  
  - 42 Intra OAuth  
- 👤 **User accounts** with Prisma + PostgreSQL
- ⚡ **End-to-end typesafe API** using tRPC
- 🌗 **Dark mode** via `next-themes`

---

## 🛠️ Tech Stack

### Frontend
- Next.js 15 (App Router)
- React 18
- TypeScript
- TailwindCSS
- Shadcn UI

### Backend
- NextAuth v5  
- tRPC  
- Prisma ORM  
- PostgreSQL (Vercel Postgres or local)

### DevOps
- Turbopack (Next.js dev)
- Prettier + ESLint
- Docker-ready (optional)

---

## 🔐 Authentication

MyMovieList supports multiple login options:

| Provider | Status |
|---------|--------|
| Google OAuth | ✅ |
| Magic Link (email) | ✅ |
| 42 OAuth | ✅ |
| Discord OAuth | ⏳ (optional) |

Everything is configured through **NextAuth v5** with Prisma Adapter.

---

## 🌟 Roadmap

- ⭐ **Create & manage favorites lists**
- 📁 User profiles with ratings & watchlists
- 🧭 Better search filters (genres, year, platforms)
- 💬 Comments / reviews system
- 📱 Mobile app (React Native)

---

## 📦 Installation

Clone the project:

```bash
git clone https://github.com/your-user/mymovielist.git
cd mymovielist
