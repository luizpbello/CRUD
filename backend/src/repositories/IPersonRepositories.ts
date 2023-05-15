import { Person } from "../entities/Person";

export interface IPersonRepository {
    save(person:Person): Promise<void>;
    findById(id:string): Promise<Person>;
    deleterPerson(id:string): Promise<void>;
    update(id:string, person:Person):Promise<Person>;
    findAll():Promise<Person[]>;
}