const express = require('express');

const app = express();

// serve static files (html, assets)
app.use(express.static(__dirname + '/public'));

// root, redirect to index page
app.get('/', function(req, res) {
  res.sendFile('index.html');
});

// serve api with json content
app.get('/api/hello/:name?', (req, res) => {
  let name = req.params['name'] || 'anonymous';
  res.status(200).json({
    success: true,
    message: `Hello ${name}, the time is ${new Date()}`
  });
})

// Set port via environment variable. Default to 3000 on local run
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App running on port ${port}`);
})