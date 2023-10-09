const PORT = process.env.PORT || 8000;
const express = require("express");
const fs = require("fs");
const path = require("path");

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
  const combinedRawFishData = {
    Shallow_Shores: rawFishData.Shallow_Shores,
    Shrapnel_River: rawFishData.Shrapnel_River,
    Trench_of_Despair: rawFishData.Trench_of_Despair,
    Lemvor_Pier: rawFishData.Lemvor_Pier,
    Open_Waters: rawFishData.Open_Waters,
    Barren_Ocean: rawFishData.Barren_Ocean,
  };

  res.json(combinedRawFishData);
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

//Endpoint to get the data from the Shallow Shores Array
app.get("/rawFish/:Shallow_Shores", async (req, res) => {
  const { Shallow_Shores } = req.params;

  //Checking if the requested array name exists in the data object (rawFish.json)
  if (rawFishData[Shallow_Shores]) {
    res.json(rawFishData[Shallow_Shores]);
  } else {
    res.status(404).json({ error: "Array not found" });
  }
});

//Endpoint to get the data from the Shrapnel River Array
app.get("/rawFish/:Shrapnel_River", async (req, res) => {
  const { Shrapnel_River } = req.params;

  //Checking if the requested array name exists in the data object (rawFish.json)
  if (rawFishData[Shrapnel_River]) {
    res.json(rawFishData[Shrapnel_River]);
  } else {
    res.status(404).json({ error: "Array not found" });
  }
});

//Endpoint to get the data from the Trench_of_Despair Array
app.get("/rawFish/:Trench_of_Despair", async (req, res) => {
  const { Trench_of_Despair } = req.params;

  //Checking if the requested array name exists in the data object (rawFish.json)
  if (rawFishData[Trench_of_Despair]) {
    res.json(rawFishData[Trench_of_Despair]);
  } else {
    res.status(404).json({ error: "Array not found" });
  }
});

//Endpoint to get the data from the Lemvor_Pier Array
app.get("/rawFish/:Lemvor_Pier", async (req, res) => {
  const { Lemvor_Pier } = req.params;

  //Checking if the requested array name exists in the data object (rawFish.json)
  if (rawFishData[Lemvor_Pier]) {
    res.json(rawFishData[Lemvor_Pier]);
  } else {
    res.status(404).json({ error: "Array not found" });
  }
});

//Endpoint to get the data from the Open_Waters Array
app.get("/rawFish/:Open_Waters", async (req, res) => {
  const { Open_Waters } = req.params;

  //Checking if the requested array name exists in the data object (rawFish.json)
  if (rawFishData[Open_Waters]) {
    res.json(rawFishData[Open_Waters]);
  } else {
    res.status(404).json({ error: "Array not found" });
  }
});

//Endpoint to get the data from the Barren_Ocean Array
app.get("rawFish/:Barren_Ocean", async (req, res) => {
  const { Barren_Ocean } = req.params;

  //Checking if the requested array name exists in the data object (rawFish.json)
  if (rawFishData[Barren_Ocean]) {
    res.json(rawFishData[Barren_Ocean]);
  } else {
    res.status(404).json({ error: "Array not found" });
  }
});

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
