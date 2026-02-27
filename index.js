const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3004;

app.use(cors());
app.use(express.json());

app.get('/time', (req, res) => {
  const now = new Date();
  const sydneyTime = new Intl.DateTimeFormat('en-AU', {
    timeZone: 'Australia/Sydney',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }).format(now);
  
  const sydneyDate = new Intl.DateTimeFormat('en-AU', {
    timeZone: 'Australia/Sydney',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(now);

  res.json({
    timezone: 'Australia/Sydney',
    city: 'Sydney',
    time: sydneyTime,
    date: sydneyDate,
    timestamp: now.toISOString()
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', service: 'api-sydney' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Sydney API running on port ${PORT}`);
});