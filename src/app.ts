import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import userRouter from './user/user.router';

dotenv.config();

const app = express();

// Express Config
app.set('port', process.env.PORT || 5000);

// Midleware
app.use(express.json());
app.use(cors());

// Route
app.use('/health', (req, res, next) => {
  res.status(200).send('Server is running');
});

app.use('/user', userRouter);

export default app;
