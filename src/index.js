const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
  console.log('Launching app... http://localhost:' + port + '\n');
});

//try { pjs.register(app, middleware); } catch (error) { }
