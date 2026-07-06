# api-express

REST API built with Node.js, Express and TypeScript.

## 🚀 Technologies

- Node.js
- Express
- TypeScript

## 📦 Endpoints

### Users

| Method | Route | Description |
|--------|-------|-------------|
| GET | /usuarios | List all users |
| GET | /usuarios/:id | Get user by id |
| POST | /usuarios | Create new user |
| PUT | /usuarios/:id | Update user |
| PATCH | /usuarios/:id | Partial update user |
| DELETE | /usuarios/:id | Delete user |

## ▶️ Running locally

```bash
# install dependencies
npm install

# run in development mode
npm run dev
```

## 📁 Structure

```
api-express/
├── src/
│   ├── routes/
│   │   └── usuarios.ts
│   └── server.ts
├── tsconfig.json
└── package.json
```
