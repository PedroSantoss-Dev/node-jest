import { data } from "../database.js";

const userController = {
  createUser(req, res) {
    const { name } = req.body;

    if (name.length < 1) {
      return res
        .status(403)
        .json("não foi possível cadastrar usuários sem nome.");
    }

    data.push(name);
    return res.status(201).json(data);
  },
  getUser(req,res){
  return res.status(200).json(data)
  }
};
export { userController };
