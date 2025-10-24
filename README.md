# 🚀 Server Collection Data Push

A simple **Express.js** server that connects to **MongoDB** and handles user-related routes efficiently.

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally:

### 1. Clone the repository
```bash
git clone https://github.com/zamanmonirbu/server-collection-data-push.git
```

### 2. Navigate to the project directory
```bash
cd server-collection-data-push
```

### 3. Create a `.env` file in the root directory
```env
PORT=3000
MONGO_URI=your_mongodb_connection_string_here
```

> Replace `your_mongodb_connection_string_here` with your actual MongoDB connection string (e.g., from MongoDB Atlas).

### 4. Install dependencies
```bash
npm install
```

### 5. Start the development server
```bash
npm run dev
```

The server will start on `http://localhost:3000` (or your specified `PORT`).

---

## 🛠️ Scripts

| Script       | Description                  |
|--------------|------------------------------|
| `npm run dev`  | Start server with nodemon (auto-restart on changes) |

---

## 📂 Project Structure

```
server-collection-data-push/
├── .env                # Environment variables
├── server.js           # Main server file
├── routes/             # API routes
├── models/             # MongoDB schemas
├── package.json
└── ...
```

---

**Ready to push data to your MongoDB collections!** 🚀