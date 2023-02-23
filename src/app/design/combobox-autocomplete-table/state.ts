export interface State {
    id: number;
    flag: string;
    name: string;
    population: string;
}
export const STATES: State[] = [
    {
        id: 1,
        name: 'Arkansas',
        population: '2.978M',
        // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
        flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg',
    },
    {
        id: 2,
        name: 'California',
        population: '39.14M',
        // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
        flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg',
    },
    {
        id: 3,
        name: 'Florida',
        population: '20.27M',
        // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
        flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg',
    },
    {
        id: 4,
        name: 'Texas',
        population: '27.47M',
        // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
        flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg',
    },
];
