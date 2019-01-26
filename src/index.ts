import express, { Application } from "express";
import { createConnection } from "typeorm";
import "reflect-metadata";

createConnection().then(async connection => {

  const app: Application = express();

  app.get("/", async (req, res) => {
    res.send("Hello world");
  });

  app.listen(process.env.PORT || 3000, async () => {
    console.log("Example app listening on port 3000!");
  });

}).catch(error => console.log("Database connection error", error));;
