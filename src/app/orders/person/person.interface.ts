export interface IPerson {
    name: string;
    display(): void;
    find(value: string): IPerson;
}
