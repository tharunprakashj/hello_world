const express = require('express');
const app = express();
const port = 6003;

app.get('/', (req, res) => {
  res.send('Mission Passed')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
