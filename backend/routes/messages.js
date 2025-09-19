import express from 'express';
import validator from 'validator';
import Message from '../models/Message.js';

const router = express.Router();

// POST /api/messages - save contact form
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: 'Invalid email' });
    }

    // Save message
    const msg = new Message({ name, email, message });
    await msg.save();

    res.status(201).json({ message: 'Message saved successfully!' });
  } catch (err) {
    console.error('❌ Error saving message:', err);
    res.status(500).json({ message: 'Server error, please try again later' });
  }
});

export default router;
