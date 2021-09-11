export interface TableReuseableColumns {
    key: string;
    display: string;
    config?: {
        isSticky?: boolean, isStickyEnd?: boolean,
        isDate?: boolean, format?: string,
        isBoolean?: boolean, values?: { true: string, false: string },
        isAction?: boolean, actions?: Actions[]
    };
}
export interface Actions {
    svgIcon: string;
    matTooltip: string;
}
export interface ActionsElement {
    action: Actions;
    elementdata: any;
}
