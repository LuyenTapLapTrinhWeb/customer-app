
export interface MouseClickMode {
    ADDING: string;
    RELOADING: string;
    QUESTIONING: string;
    EDITING: string;
    EVENT?: MouseEvent;
}
export interface ScreenListButton {
    mouseClickMode: string;
    mouseClickEvent?: MouseEvent;
    svgIcon: string;
    active?: boolean;
}
