import { Person } from "../entities/Person";
import { IPersonRepository } from "../repositories/IPersonRepositories";
import { IPersonRequestDTO } from "../controllers/IPersonDTO";

export class PersonUseCase {
  constructor(private personRepository: IPersonRepository) {}

  async createPerson(data: IPersonRequestDTO) {
    const personExists = await this.personRepository.findById(data.id);

    if (personExists) {
      throw new Error("Pessoa já cadastrada.");
    }

    const person = new Person(data);

    await this.personRepository.save(person);
  }

  async getAllPersons(): Promise<Person[]> {
    const persons = await this.personRepository.findAll();
    return persons;
  }

  async getPersonById(id: string): Promise<Person> {
    const person = await this.personRepository.findById(id);
    return person;
  }

  async deletePerson(id:string):Promise<void>{
    const personToDelete = await this.personRepository.findById(id)
    await this.personRepository.deleterPerson(personToDelete.id)
  }


  async updatePerson(id:string, person:IPersonRequestDTO){
    const personToUpdate = await this.personRepository.findById(id)
    await this.personRepository.update(id, person)
  }
}
