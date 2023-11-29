const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors()); // Enable CORS

app.post('/hubspot-api', async (req, res) => {
  try {
    const { url, method, headers, data } = req.body;
    const response = await axios({
      method,
      url,
      headers,
      data,
    });

    res.json(response.data);
  } catch (error) {
    console.error('Proxy Server Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy Server is running on http://localhost:${PORT}`);
});
