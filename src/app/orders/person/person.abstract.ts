import { IPerson } from './person.interface';

export abstract class Person implements IPerson {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    abstract find(value: string): Person;
    display(): void {
        console.log(this.name);
    }
}
