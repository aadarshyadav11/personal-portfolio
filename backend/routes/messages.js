const express = require('express');
const Message = require('../models/Message');
const validator = require('validator');

const router = express.Router();

// POST /api/messages - save contact form
router.post('/', async (req, res) => {

    try{
    const {name, email, message} = req.body;
    

    if(!name || !email || !message) return res.status(400).json({message : 'All field are required'});
    
    if(!validator.isEmail(email)) return res.status(400).json({message : 'Invalid email'});

    const msg = new Message({name, email, message});
    await msg.save()

    res.status(201).json({message : 'message saved successfully!'});
    } catch (err){
        console.error('Error saving messages', err);
        res.status(500).json({message : 'Server error, try again later'});
    }
});

module.exports = router;