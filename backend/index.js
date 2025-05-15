const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello from Express API!');
});
app.listen(3001, () => console.log('API listening on port 3001'));
