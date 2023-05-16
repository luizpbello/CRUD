export class Person {
    public id?: string;
    public name!: string;
    public lastName!: string;

    
    constructor(props:Person, id?:string){
        this.id = id
        Object.assign(this, props)
    }
}