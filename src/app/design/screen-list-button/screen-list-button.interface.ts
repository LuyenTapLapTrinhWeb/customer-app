
export interface MouseClickMode {
    ADDING: string;
    RELOADING: string;
    QUESTIONING: string;
    EDITING: string;
    DELETING: string;
    EXPORTEXCEL: string;
    CANCELING: string;
    LOCKING: string;
    EVENT?: MouseEvent;
}
export interface ScreenListButton {
    id?: number;
    mouseClickMode: string;
    mouseClickEvent?: MouseEvent;
    svgIcon: string;
    active?: boolean;
    tooltip: string;
}
