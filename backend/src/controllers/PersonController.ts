import { PersonUseCase } from "../useCases/PersonUseCase";
import { IPersonRequestDTO } from "./IPersonDTO";

export class PersonController {
  constructor(private personUseCase: PersonUseCase) {}

  async create(request: Request, reponse: Response):Promise<Response> {
    const { name, lastname } = request.body;

    try {
        await this.personUseCase.createPerson({ name, lastName})
    } catch (error) {
        
    }
  }

  async findAll() {
    return this.personUseCase.getAllPersons();
  }

  async findOne(id: string) {
    return this.personUseCase.getPersonById(id);
  }
}
