import express, { Request, Response } from "express";
import { createConnection, Connection } from "typeorm";
import * as bodyParser from "body-parser";
import * as dotenv from "dotenv";
import "reflect-metadata";

import { appRoutes } from "./routes";

dotenv.config();

createConnection().then(async (connection: Connection) => {

  const app = express();

  app.use(bodyParser.json());

  appRoutes.forEach(route => {
    app[route.method](route.path, (request: Request, response: Response, next: Function) => {
      route.action(request, response)
        .then(() => next)
        .catch(error => next(error));
    });
  });

  app.listen(process.env.API_PORT || 3000, async () => {
    console.log(`Example app listening on port ${process.env.API_PORT}!`);
  });

}).catch(error => console.log("Database connection error", error));;
