export interface UserData {
    _id?: number;
    username?: string;
    email?: string;
    dob?: number;
    actif?: boolean;
}
export interface Cols {
    key: string;
    display: string;
    config?: {
        isSticky?: boolean, isStickyEnd?: boolean,
        isDate?: boolean, format?: string,
        isBoolean?: boolean, values?: { true: string, false: string },
        isAction?: boolean, actions?: string[]
    };
}
export interface TableReuseable {
    cols: Cols[];
    USERS_DATA: UserData[];
    onActionHandler: (event) => void;
}
export class TableReuseableData implements TableReuseable {
    cols: Cols[];
    USERS_DATA: UserData[];
    constructor() {
        this.cols = [
            { key: '_id', display: 'User Id' },
            { key: 'username', display: 'Username', config: { isSticky: true } },
            { key: 'email', display: 'Email' },
            // following objects will contain a specific config parameters
            // based on this params we will change the display of each column
            {
                key: 'dob', display: 'Date of Birth',
                // This column will hold a date value, so we must format the
                // display to show as a date
                config: { isDate: true, format: 'dd MMM yy' }
            },
            {
                key: 'actif', display: 'Actif/Blocked',
                // this column holds a boolean value, we will display a value
                // in true/false cases
                config: { isBoolean: true, values: { true: 'Blocked', false: 'Actif' } }
            },
            {
                key: 'action', display: 'Action',
                // in this column we have actions like activate/block account
                // so we will create a button and create it event click
                config: { isAction: true, actions: ['delete', 'update'] }
            }
        ];
        this.USERS_DATA = [
            { _id: 1, username: 'Abderrahmene', email: 'abderrahmene@abc.xyz', dob: Date.now(), actif: true },
            { _id: 2, username: 'Mohammed', email: 'mohammed@abc.xyz', dob: Date.now(), actif: false },
            { _id: 3, username: 'Mustapha', email: 'mustapha@abc.xyz', dob: Date.now(), actif: true },
            { _id: 4, username: 'Abdelaziz', email: 'abdelaziz@abc.xyz', dob: Date.now(), actif: false },
            { _id: 5, username: 'Abdelhakim', email: 'hakim@abc.xyz', dob: Date.now(), actif: true },
            { _id: 6, username: 'Ilyes', email: 'ilyes@abc.xyz', dob: Date.now(), actif: true },
            { _id: 7, username: 'Salim', email: 'salim@abc.xyz', dob: Date.now(), actif: false },
            { _id: 8, username: 'Omar', email: 'omar@abc.xyz', dob: Date.now(), actif: true },
            { _id: 9, username: 'Issam', email: 'issam@abc.xyz', dob: Date.now(), actif: false },
            { _id: 10, username: 'Osman', email: 'osman@abc.xyz', dob: Date.now(), actif: false }];
    }

    onActionHandler(event): void {
        console.log(event);
    }
}