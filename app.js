import express from 'express';
import userRoutes from './routes/userRoutes.js';
import { apiBaseUrl } from './util/utils.js';

const app = express();

app.use(express.json());

app.use(apiBaseUrl, userRoutes);

export default app;