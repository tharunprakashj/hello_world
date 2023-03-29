const express = require('express');
const app = express();
const port = 6003;

app.get('/', (req, res) => {
  res.send('GITHUB ACTION')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
