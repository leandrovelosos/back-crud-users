
import express from 'express';
import { getUsers, addUser, updateUSer, deleteUser } from "../controllers/users.js";

//rotas
const router = express.Router();

router.get("/", getUsers);

router.post("/", addUser);

router.put("/:id", updateUSer);

router.delete("/:id", deleteUser);

export default router;