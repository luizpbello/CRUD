import { Request, Response } from "express";
import { PersonUseCase } from "../useCases/PersonUseCase";

export class PersonController {
  constructor(private personUseCase: PersonUseCase) {}

  async create(request: Request, response: Response): Promise<Response> {
    const { name, lastName } = request.body;

    try {
      await this.personUseCase.createPerson({ name, lastName });
      return response
        .status(201)
        .json({ message: "Pessoa adicionada com sucesso!" });
    } catch (error) {
      return response.status(500).json({ error: "Ocorreu algum erro." });
    }
  }

  async findAll(request: Request, response: Response) {
    try {
      const persons = await this.personUseCase.getAllPersons();
      return response.status(200).json(persons);
    } catch (error) {
      return response.status(500).json({ error: "Ocorreu algum erro." });
    }
  }

  async findOne(request: Request, response: Response) {
    const { id } = request.params;
    try {
      const person = await this.personUseCase.getPersonById(id);
      return response.json(person);
    } catch (error) {
      return response.status(500).json({ error: "Ocorreu algum erro." });
    }
  }

  async deleteOne(request: Request, response: Response) {
    const { id } = request.params;
    try {
      await this.personUseCase.deletePerson(id);
      return response.status(200).json({message: `O id removido foi ${id}`})
    } catch (error) {
      return response.status(500).json({error:'Não foi possível excluir a pessoa'})
    }
  }
}
