export interface ScreenListInput {
    title?: string;
    placeholder?: string;
}

// tslint:disable-next-line:no-empty-interface
export interface ScreenListInputSearch extends ScreenListInput {
    formControlName?: string;
}

export const INPUTSEARCHHSSK: ScreenListInputSearch = {
    title: 'Tìm theo từ khóa',
    placeholder: 'CMND, CCCD, TÊN HOẶC MÃ HSSK',
};
