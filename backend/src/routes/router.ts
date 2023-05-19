import { Router } from "express";
import { personController } from "../controllers/index";

const router = Router();

router.post("/person", (request, response) => {
  return personController.create(request, response);
});

router.get("/person", (request, response) => {
  return personController.findAll(request, response);
});

router.get("/person/:id", (request, response) => {
  return personController.findOne(request, response);
});

export { router };
