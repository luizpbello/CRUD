import { Person } from "../entities/Person";
import { IPersonRepository } from "../repositories/IPersonRepositories";
import { IPersonRequestDTO } from "../controllers/IPersonDTO";

export class PersonController {
  constructor(private personRepository: IPersonRepository) {}

  async createPerson(data: IPersonRequestDTO) {
    try {
      const personExists = await this.personRepository.findById(data.id);

      if (personExists) {
        throw new Error("Pessoa já cadastrada.");
      }

      const person = new Person(data);

      await this.personRepository.save(person);
    } catch (error) {
        throw new Error('Error do servidor')
    }
  }

  async getAllPersons(): Promise<Person[]> {
    const persons = await this.personRepository.findAll();
    return persons;
  }

  async getPersonById(data: IPersonRequestDTO): Promise<Person> {
    const person = await this.personRepository.findById(data.id);
    return person;
  }
}
