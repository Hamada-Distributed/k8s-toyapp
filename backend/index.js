const express = require('express');
const morgan  = require('morgan');
const cors    = require('cors');

const port = process.env['APP_PORT'] || 3000;

const app = express();
app.use( morgan('combined') );
app.use(cors());

app.get('/api/status', (req, res)=>{
  res.sendStatus(200);
});

app.get('/api/hello', (req, res)=>{
  res.send("HELLO FROM THE BACKEND!");
});

app.listen(port, ()=>{
  console.log(`Listening on port ${port}`);
});
