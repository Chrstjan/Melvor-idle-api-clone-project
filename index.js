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

//finding the rawFish json file in the project
const rawFishFilePath = path.join(
  __dirname,
  "Assets",
  "js",
  "food",
  "rawFish.json"
);

const woodLogData = JSON.parse(fs.readFileSync(woodLogFilePath, "utf8"));

const rawFishData = JSON.parse(fs.readFileSync(rawFishFilePath, "utf8"));

//when visiting localhost:8000/ this message displays
app.get("/", (req, res) => {
  res.json("Welcome to my Melvor Idle API");
});

//when visiting localhost:8000/woodLogs the different woodlogs data shows
app.get("/woodLogs", (req, res) => {
  res.json(woodLogData.woodLogs);
});

//when visiting localhost:8000/rawFish the different raw fish & their location data shows
app.get("/rawFish", (req, res) => {
  //This combines all the data & shows the location
  const raw_FishData = {
    Shallow_Shores: rawFishData.Shallow_Shores,
    Shrapnel_River: rawFishData.Shrapnel_River,
    Trench_of_Despair: rawFishData.Trench_of_Despair,
    Lemvor_Pier: rawFishData.Lemvor_Pier,
    Open_Waters: rawFishData.Open_Waters,
    Barren_Ocean: rawFishData.Barren_Ocean,
  };

  res.json(raw_FishData);
  //This combines the data but dosen't show the location
  /*const combinedRawFishData = [
    ...rawFishData.Shallow_Shores,
    ...rawFishData.Shrapnel_River,
    ...rawFishData.Trench_of_Despair,
    ...rawFishData.Lemvor_Pier,
    ...rawFishData.Open_Waters,
    ...rawFishData.Barren_Ocean,
  ];

  res.json(combinedRawFishData);
  */
});

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
