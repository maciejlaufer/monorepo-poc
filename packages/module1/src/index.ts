import express from "express";
import { saveFile, logNumber } from "shared1";

const app = express();

app.get("/", (_req, res) => {
  saveFile();
  res.status(200).send("Saved");
});

app.get("/log", (_req, res) => {
  logNumber(9);
  res.sendStatus(200);
});

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
