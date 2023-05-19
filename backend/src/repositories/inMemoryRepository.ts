import { Person } from "../entities/Person";
import { IPersonRepository } from "./IPersonRepositories";
import { v4 as uuidv4 } from 'uuid';

export class InMemoryRepository implements IPersonRepository {
  private person: Person[] = [];

  async save(person: Person): Promise<void> {
    const personWithId = {
      ...person,
      id: uuidv4()
    }
    this.person.push(personWithId);
  }
  async findById(id: string): Promise<Person> {
    const person = this.person.find((person) => person.id === id);
    return person;
  }
  async deleterPerson(id: string): Promise<void> {
    const indexToDelete = this.person.findIndex((person) => person.id === id);

    if (indexToDelete === -1) {
      throw new Error("Pessoa não encontrada");
    }

    this.person.splice(indexToDelete, 1);
  }
  async update(id: string, person: Person): Promise<Person> {
    const indexToUpdate = this.person.findIndex((person) => person.id === id);

    if (indexToUpdate === -1) {
      throw new Error("Pessoa não encontrada");
    }

    const updatedPerson = { ...this.person[indexToUpdate], ...person };

    this.person[indexToUpdate] = updatedPerson;

    return updatedPerson;
  }
  async findAll(): Promise<Person[]> {
    return this.person
  }
}
