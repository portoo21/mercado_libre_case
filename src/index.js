const express = require('express')
const formatData = require("./formatData");
const writeFile = require("./writeFile");
const app = express()
const port = 3000

app.use(express.json());

app.post('/send-stats', (req, res) => {
  const body = req.body;

  const response = formatData(body);

  let remoteIp = req.ip;
  if (remoteIp.substring(0, 7) == "::ffff:") {
    remoteIp = remoteIp.substr(7)
  }
  const now = new Date();

  writeFile(response, remoteIp, now);

  res.sendStatus(200);
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})