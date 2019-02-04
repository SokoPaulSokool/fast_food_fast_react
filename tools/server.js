const express = require('express');
const open = require('open');
const os = require('os');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;
app.use(express.static('dist'));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../dist/index.html'))
);
app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log(port);
  }
});
