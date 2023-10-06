const PORT = 8000;
const express = require("express");
const fs = require("fs");
const path = require("path");
const axios = require("axios");
const cheerio = require("cheerio");

const app = express();

//finding the woodLogs json file in the project
const woodLogFilePath = path.join(
  __dirname,
  "Assets",
  "js",
  "woodTypes",
  "woodLogs.json"
);

const woodLogData = JSON.parse(fs.readFileSync(woodLogFilePath, "utf8"));

//when visiting localhost:8000/ this message displays
app.get("/", (req, res) => {
  res.json("Welcome to my Melvor Idle API");
});

//when visiting localhost:8000/woodLogs the different woodlogs data shows
app.get("/woodLogs", (req, res) => {
  res.json(woodLogData.woodLogs);
});

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
