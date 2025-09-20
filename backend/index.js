import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/database.js';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

import messagesRouter from './routes/messages.js';
import errorHandler from './middleware/errorHandler.js';

dotenv.config();
const app = express();

// Fix for __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// connect to database
connectDB();

// middleware
app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  })
);

// API routes
app.use('/api/messages', messagesRouter);

// Error handler
app.use(errorHandler);

// Serve frontend
const frontendPath = path.join(__dirname, '../frontend/dist');
app.use(express.static(frontendPath));

app.get((req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

// Start server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
