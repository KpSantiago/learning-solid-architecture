import { create } from "domain";
import { Router } from "express";
import { createUserController } from "./use-cases/create-user";

const router = Router();

router.post("/users", (req, res) => createUserController.handle(req, res));

export { router }