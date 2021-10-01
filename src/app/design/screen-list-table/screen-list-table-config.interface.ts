import { ScreenListButton } from '../screen-list-button/screen-list-button.interface';

export interface TableReuseableColumns {
    key: string;
    display: string;
    config?: {
        isNumber?: boolean,
        isSticky?: boolean, isStickyEnd?: boolean,
        isDate?: boolean, format?: string,
        isBoolean?: boolean, values?: { true?: string, false?: string, 1?: string, 2?: string, 3?: string },
        isAction?: boolean, actions?: ActionsEvent[]
        isChildren?: boolean, children?: string[],
        class?: string, isSex?: boolean
    };
}
// tslint:disable-next-line:no-empty-interface
export interface ActionsEvent extends ScreenListButton { }

export interface ActionsElement {
    action: ActionsEvent;
    elementdata: any;
    index?: number;
}
