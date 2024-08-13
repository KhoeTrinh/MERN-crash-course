import express from 'express';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';

import productRoute from './routes/productRoutes.js'

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/shopping', productRoute)

const port = process.env.PORT

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
