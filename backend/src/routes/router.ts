import { Router } from "express";
import { PersonController } from "../controllers/PersonController";
import { PersonUseCase } from "../useCases/PersonUseCase";
import { InMemoryRepository } from "../repositories/inMemoryRepository";

const router = Router()
const inMemoryRepository = new InMemoryRepository()
const personUseCase = new PersonUseCase(inMemoryRepository)
const personController = new PersonController(personUseCase)

router.post('/person', (request, response) => {
})