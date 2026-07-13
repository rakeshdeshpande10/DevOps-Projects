const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Root — basic health/identity check
app.get('/', (req, res) => {
  res.json({
    message: 'DevOps practice app is running',
    hostname: require('os').hostname(), // useful later to see which pod/replica answered
    timestamp: new Date().toISOString()
  });
});

// Health check — this is what K8s liveness/readiness probes will hit later
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

// A simple stateful-ish endpoint, just to have more than one route
let visitCount = 0;
app.get('/visits', (req, res) => {
  visitCount++;
  res.json({ visits: visitCount });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});