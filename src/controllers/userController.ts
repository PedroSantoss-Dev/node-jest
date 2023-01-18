import { Request, Response } from "express";
import { data } from "../database";

export class UserController {
  createUser(req: Request, res:Response): Response {
    const { name } = req.body;

    if (name.length < 1) {
      return res
        .status(403)
        .json("não foi possível cadastrar usuários sem nome.");
    }

    data.push(name)
    return res.status(201).json(data);
  }
  getUser(req:Request,res:Response){
  return res.status(200).json(data)
  }
};
