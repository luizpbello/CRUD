import {v4 as uuiv4} from 'uuid'

export class Person {
    public id: string;
    public name!: string;
    public lastName!: string;

    
    constructor(props:Person, id?:string){
        this.id = uuiv4()
        Object.assign(this, props)
    }
}