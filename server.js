const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // Parse JSON body

// API to accept latitude and longitude
app.post('/api/submit-location', (req, res) => {
  const { latitude, longitude } = req.body;

  // Basic validation
  if (
    typeof latitude === 'number' && latitude >= -90 && latitude <= 90 &&
    typeof longitude === 'number' && longitude >= -180 && longitude <= 180
  ) {
    return res.json({ status: 'success', latitude, longitude });
  } else {
    return res.status(400).json({ status: 'fail', message: 'Invalid coordinates' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
