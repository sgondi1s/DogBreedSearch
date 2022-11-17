var express = require("express");
var app = express();
var axios = require("axios");
var bodyParser = require("body-parser");
var cors = require("cors");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors("*"));

app.get("/:name", async (req, res) => {
  try {
    if (!req.params.name) {
      throw new Error("Dog Breed is required!");
    }
    let api_uri = `https://dog.ceo/api/breed/${req.params.name}/images/random`;
    let response = await axios.get(api_uri);
    res.json(response.data);
  } catch (ex) {
    res.send({ message: ex.message });
    console.log(ex);
  }
});

app.listen("3011", async (req, res) => {
  console.log("App Listening to 3011 port");
});
