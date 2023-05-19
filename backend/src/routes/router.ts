import { Router } from "express";
import { PersonController } from "../controllers/PersonController";
import { PersonUseCase } from "../useCases/PersonUseCase";
import { InMemoryRepository } from "../repositories/inMemoryRepository";

const router = Router();
const inMemoryRepository = new InMemoryRepository();
const personUseCase = new PersonUseCase(inMemoryRepository);
const personController = new PersonController(personUseCase);

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
