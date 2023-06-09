import { it, describe, beforeEach, expect } from "vitest";
import { InMemoryRepository } from "../repositories/inMemoryRepository";
import { Person } from "../entities/Person";

const fakePerson = {
  name: "Luiz",
  lastName: "Bello",
};

describe("Testing Person repository", () => {
  let repository: InMemoryRepository;

  beforeEach(() => {
    repository = new InMemoryRepository();
  });

  it("Should can create a new Person", async () => {
    const person = new Person(fakePerson);
    await repository.save(person);
    const result = await repository.findAll();
    expect(result[0].name && result[0].lastName).toEqual(person.name && person.lastName);
  });

  it("Should can find a Person by ID", async () => {
    const person = new Person(fakePerson);
    await repository.save(person);
    const result = await repository.findById(person.id);
    expect(result).toEqual(person);
  });

  it("Should can delete a Person by ID", async () => {
    const person = new Person(fakePerson);

    await repository.save(person);
    const personToDelete = await repository.findById(person.id);
    await repository.deleterPerson(personToDelete.id);
    const result = await repository.findAll();
    expect(result).toEqual([]);
  });

  it("Should return an error if trying to delete a person that doesn't exist", async () => {
    await expect(repository.deleterPerson("1a9l3m7")).rejects.toThrowError(
      "Pessoa não encontrada"
    );
  });

  it("Should can update a person data", async () => {
    const person = new Person(fakePerson);

    await repository.save(person);

    const personToUpdate = new Person({
      id: person.id,
      name: "Alterado",
      lastName: "Até demais",
    });

    await repository.update(person.id, personToUpdate);
    const personUpdated = await repository.findById(person.id);
    expect(personUpdated?.name).toBe("Alterado");
    expect(personUpdated?.lastName).toBe("Até demais");
  });

  it("Should can't update a person that doesn't exists", async () => {
    const person = new Person(fakePerson);

    await repository.save(person);

    const personToUpdate = new Person({
      id: person.id,
      name: "Alterado",
      lastName: "Até demais",
    });

    const errorPerson = {
      name:"Luiz",
      lastName:"Bello"
    }

    await expect(
      repository.update("a8923an", errorPerson)
    ).rejects.toThrowError("Pessoa não encontrada");
  });
});
