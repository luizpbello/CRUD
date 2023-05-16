import { it, describe, beforeEach, expect } from "vitest";
import { InMemoryRepository } from "../repositories/inMemoryRepository";
import { Person } from "../entities/Person";

describe("Testing Person repository", () => {
  let repository: InMemoryRepository;

  beforeEach(() => {
    repository = new InMemoryRepository();
  });

  it("Should can create a new Person", async () => {
    const person = new Person({
      id: "123abc",
      name: "Luiz",
      lastName: "Bello",
    });

    await repository.save(person);
    const result = await repository.findAll();
    expect(result[0]).toEqual(person);
  });

  it("Should can find a Person by ID", async () => {
    const person = new Person({
      id: "5e2c3t",
      name: "Luiz",
      lastName: "Bello",
    });

    await repository.save(person);
    const result = await repository.findById(person.id);
    expect(result.id).toEqual(person.id);
  });

  it("Should can delete a Person by ID", async () => {
    const person = new Person({
      id: "5e2c3t",
      name: "Luiz",
      lastName: "Bello",
    });

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

  it("Should cand update a person data", async () => {
    const person = new Person({
      id: "5e2c3t",
      name: "Luiz",
      lastName: "Bello",
    });

    await repository.save(person);

    const personToUpdate = new Person(
      { name: "Alterado", lastName: "Até demais" },
      person.id
    );

    await repository.update(person.id, personToUpdate);
    const personUpdated = await repository.findById(person.id);
    expect(personUpdated?.name).toBe("Alterado");
    expect(personUpdated?.lastName).toBe("Até demais");
  });
});
