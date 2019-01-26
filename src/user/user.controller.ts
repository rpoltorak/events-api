import { Request, Response } from "express";

export async function register(request: Request, response: Response) {
  response.send("register");
}

export async function login(request: Request, response: Response) {
  response.send("login");
}
