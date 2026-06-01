const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');
const dotenv = require('dotenv');
const path = require('path');
const { rateLimit } = require('express-rate-limit');
const { RedisStore } = require('rate-limit-redis');
const { createClient } = require('redis');

dotenv.config();

const app = express();

let useRedis = false;

// Redis Client for Rate Limiting
const redisClient = createClient({
  url: process.env.REDIS_URL || 'redis://127.0.0.1:6379'
});

redisClient.on('error', (err) => {
  console.log('Redis Client Error', err);
  useRedis = false;
});

(async () => {
  try {
    await redisClient.connect();
    console.log('Connected to Redis');
    useRedis = true;
  } catch (err) {
    console.error('Failed to connect to Redis. Rate limiting will fallback to MemoryStore.', err);
    useRedis = false;
  }
})();

// Memory rate limiting fallback
const memoryLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000, // limit each IP to 1000 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
});

// Redis rate limiting for high-concurrency (10k+ concurrent users)
const redisLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000, // limit each IP to 1000 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
  store: new RedisStore({
    sendCommand: (...args) => redisClient.sendCommand(args),
  }),
});

// Dynamic middleware selection
const dynamicLimiter = (req, res, next) => {
  if (useRedis) {
    return redisLimiter(req, res, next);
  } else {
    return memoryLimiter(req, res, next);
  }
};

app.use(cors());
app.use(express.json());
app.use(dynamicLimiter); // Apply dynamic rate limiter to all requests

// Initialize Firebase Admin (Mock or replace with service account JSON)
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

app.post('/api/auth/google', async (req, res) => {
  const { token } = req.body;
  if (!token) {
    return res.status(400).json({ error: 'Token is required' });
  }

  try {
    console.log('Received token:', token);
    res.json({ success: true, message: 'Google Auth Successful (Mock Verification)' });
  } catch (error) {
    console.error('Error verifying auth token', error);
    res.status(401).json({ error: 'Unauthorized' });
  }
});

// Serve frontend static files
app.use(express.static(path.join(__dirname, '../frontend/dist')));

app.get('/{*splat}', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
