const express = require('express');
const http = require('http');
const path = require('path');
const fs = require('fs');
const app = express();
const ENV = process.env.NODE_ENV;
const PORT = ENV === "production" ? process.env.PORT : 3009;//must run on this port to be allow run the service worker correctly
app.use(express.static(path.resolve(__dirname, './public')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/index.html'));
})

app.get('/pages/:page', (req, res) => {
  let candidate = `./views/${req.params.page}`;
  let exists = fs.existsSync(candidate);
  if (exists) return res.sendFile(path.resolve(__dirname,  candidate));
  return res.status(404).send();
})

app.listen(PORT, 'localhost', () => {
  console.log(`Listen on port: ${PORT}`);
})
