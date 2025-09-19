import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

// Local imports
import connectDB from './config/database.js';
import messagesRouter from './routes/messages.js';
import errorHandler from './middleware/errorHandler.js';

// Config
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Fix __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Connect to database
connectDB();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL || '*', // Restrict in production
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  })
);

// Serve static frontend (only when deployed)
app.use(express.static(path.join(__dirname, '../frontend/dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
});

// API Routes
app.use('/api/messages', messagesRouter);

// Error Handler
app.use(errorHandler);

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend running 🚀' });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
