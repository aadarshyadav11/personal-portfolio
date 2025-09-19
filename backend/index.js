const dotenv = require('dotenv');
const express = require('express');
const connectDB = require('./config/database');
const cors = require('cors');
const path =  require('path');


const messagesRouter = require('./routes/messages');
const errorHandler = require('./middleware/errorHandler');

dotenv.config();
const app = express();

// connect to database
connectDB();

// middleware
app.use(express.json())
app.use(
    cors({
        origin : process.env.CLIENT_URL || '*', //restrict in production
        methods : ['GET','POST','PUT','DELETE'],
    })
)

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/frontend/dist')));

app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname,"frontend", "dist", "index.html"));
});

// Routes
app.use('/api/messages', messagesRouter);

// Error handler 
app.use(errorHandler);

// app.get('/',(req,res) => {
//     res.json({'message' : "Hello welcome in the backend development"});
// })

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})