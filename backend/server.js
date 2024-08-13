import express from 'express';
import dotenv from 'dotenv'
import { connectDB } from './config/db.js';

dotenv.config()
connectDB

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(5000, () => {
    console.log('Server is running on port 5000')
})

