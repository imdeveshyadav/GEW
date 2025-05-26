import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import multer from 'multer';
import path from 'path';
import { PrismaClient } from '@prisma/client';

import listingsRouter from './routes/listings.js';

dotenv.config();
const prisma = new PrismaClient();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.resolve('uploads')));

// file upload config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
export const upload = multer({ storage });

app.get('/', (req, res) => {
  res.send('GEW API running ✅');
});

app.use('/api/listings', listingsRouter(prisma));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 API http://localhost:${PORT}`));