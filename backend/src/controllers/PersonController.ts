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
      return response.status(500).json({ error: "Ocorreu algum erro no servidor." });
    }
  }

  async findAll(request: Request, response: Response) {
    try {
      const persons = await this.personUseCase.getAllPersons();
      !persons ? response.status(200).json(persons) : response.status(404).json({message: 'Nenhuma pessoa registrada'})
    } catch (error) {
      return response.status(500).json({ error: "Ocorreu algum erro no servidor." });
    }
  }

  async findOne(request: Request, response: Response) {
    const { id } = request.params;
    try {
      const person = await this.personUseCase.getPersonById(id);
      person ? response.status(200).json(person) :  response.status(404).json({message: 'Não há usuário com esse ID'})
    } catch (error) {
      return response.status(500).json({ error: "Ocorreu algum erro no servidor." });
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


  async updateOne(request:Request, response:Response){
    const {id} = request.params
    const newPerson = request.body

    try {
      const personToUpdate = await this.personUseCase.updatePerson(id, newPerson)
      return response.status(203).json({message: `Pessoa de id ${id} atualizada`})
    } catch (error) {
      return response.status(500).json({error: 'Falha ao atualizar pessoa.'})
    }
  }
}
