// server/index.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const supabase = require('./supabaseClient');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/test-supabase', async (req, res) => {
  // Replace 'test_table' with a real table name from your Supabase project
  const { data, error } = await supabase.from('test_table').select('*');
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));