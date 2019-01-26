import express, { Application } from "express";
import { createConnection } from "typeorm";
import * as dotenv from "dotenv";

import "reflect-metadata";

dotenv.config();

createConnection().then(async connection => {

  const app: Application = express();

  app.get("/", async (req, res) => {
    res.send("Hello world");
  });

  app.listen(process.env.API_PORT || 3000, async () => {
    console.log(`Example app listening on port ${process.env.API_PORT}!`);
  });

}).catch(error => console.log("Database connection error", error));;
