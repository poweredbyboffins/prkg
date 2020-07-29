import express from 'express';
const app = express();

app.get('localhost:5000', (req, res) => {
  return res.send();
});
