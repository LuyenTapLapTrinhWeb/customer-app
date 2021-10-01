export interface ScreenListInput {
    id?: number;
    title?: string;
    placeholder?: string;
}
// tslint:disable-next-line:no-empty-interface
export interface ScreenListInputSearch extends ScreenListInput {
    formControlName?: string;
}

export let INPUTSEARCHHSSK: ScreenListInputSearch = {
    id: 1,
    title: 'Tìm theo "Mã HSSK"',
    placeholder: 'Mã HSSK',
};
export let INPUTSEARCCCCD: ScreenListInputSearch = {
    id: 2,
    title: 'Tìm theo "CMND - CCCD"',
    placeholder: 'CMND - CCCD',
};
export let INPUTSEARCHTEN: ScreenListInputSearch = {
    id: 3,
    title: 'Tìm theo "Tên"',
    placeholder: 'Tên',
};
