const express = require("express");
const cors = require("cors");
const app = express();

const PORT = 3000;

app.use(cors());

const aliens = {
  humans: {},
  vulcans: {},
  unknown: {},
  borg: {},
  klingons: {},
  romulans: {},
  gorn: {},
  trill: {},
};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/:alienName", (req, res) => {
  const aliensName = req.params.alienName.toLowerCase();
  if (aliens[aliensName]) {
    res.json(aliens[aliensName]);
  } else {
    res.json(aliens["unknown"]);
  }
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is running!`);
});
