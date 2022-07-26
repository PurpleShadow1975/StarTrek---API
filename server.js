const express = require("express");
const cors = require("cors");
const app = express();

const PORT = 3000;

app.use(cors());

const aliens = {
  humans: {
    speciesName: "Humans",
    homeWorld: "Earth",
    features: "Rounded ears, hair on head and face",
    interestingFact:
      "Founders of the United Federation of Planets after first contact with Vulcans",
    notableExample: "James T. Kirk, Zephram Cochran, Angela Merkel",
    image:
      "https://static.wikia.nocookie.net/aliens/images/6/68/The_City_on_the_Edge_of_Forever.jpg",
  },
  vulcans: {
    speciesName: "Vulcans",
    homeWorld: "Vulcan",
    features: "Pointy ears, hair on head and face",
    interestingFact:
      "Founders of the United Federation of Planets after first contact with Vulcans",
    notableExample: "Jmes T. Kirk, Zephram Cochran, Angela Merkel",
    image:
      "https://static.wikia.nocookie.net/aliens/images/6/68/The_City_on_the_Edge_of_Forever.jpg",
  },
  unknown: {
    speciesName: "Unknown Species",
    homeWorld: "unknown",
    features: "unknown",
    interestingFact: "unknown",
    notableExample: "unknown",
    image: null,
  },
  borg: {
    speciesName: "Borg",
    homeWorld: "unknown",
    features: "Rounded ears, hair on head and face",
    interestingFact:
      "Founders of the United Federation of Planets after first contact with Vulcans",
    notableExample: "Seven of Nine, Borg Queen",
    image:
      "https://static.wikia.nocookie.net/aliens/images/6/68/The_City_on_the_Edge_of_Forever.jpg",
  },
  klingons: {
    speciesName: "Klingons",
    homeWorld: "Earth",
    features: "Ridged forhead",
    interestingFact:
      "Founders of the United Federation of Planets after first contact with Vulcans",
    notableExample: "James T. Kirk, Zephram Cochran, Angela Merkel",
    image:
      "https://static.wikia.nocookie.net/aliens/images/6/68/The_City_on_the_Edge_of_Forever.jpg",
  },
  romulans: {
    speciesName: "Romulans",
    homeWorld: "Romulus",
    features: "Rounded ears, hair on head and face",
    interestingFact:
      "Founders of the United Federation of Planets after first contact with Vulcans",
    notableExample: "James T. Kirk, Zephram Cochran, Angela Merkel",
    image:
      "https://static.wikia.nocookie.net/aliens/images/6/68/The_City_on_the_Edge_of_Forever.jpg",
  },
  gorn: {
    speciesName: "Gorn",
    homeWorld: "Earth",
    features: "Rounded ears, hair on head and face",
    interestingFact:
      "Founders of the United Federation of Planets after first contact with Vulcans",
    notableExample: "James T. Kirk, Zephram Cochran, Angela Merkel",
    image:
      "https://static.wikia.nocookie.net/aliens/images/6/68/The_City_on_the_Edge_of_Forever.jpg",
  },
  trill: {
    speciesName: "Trill",
    homeWorld: "Earth",
    features: "Rounded ears, hair on head and face",
    interestingFact:
      "Founders of the United Federation of Planets after first contact with Vulcans",
    notableExample: "James T. Kirk, Zephram Cochran, Angela Merkel",
    image:
      "https://static.wikia.nocookie.net/aliens/images/6/68/The_City_on_the_Edge_of_Forever.jpg",
  },
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
