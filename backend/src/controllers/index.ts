import { PersonController } from "./PersonController";
import { PersonUseCase } from "../useCases/PersonUseCase";
import { InMemoryRepository } from "../repositories/inMemoryRepository";

const inMemoryRepository = new InMemoryRepository();
const personUseCase = new PersonUseCase(inMemoryRepository);
const personController = new PersonController(personUseCase);

export { personController };
