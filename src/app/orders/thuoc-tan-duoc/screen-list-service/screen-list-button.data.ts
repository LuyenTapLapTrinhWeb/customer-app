import { MouseClickMode } from "./screen-list-button.interface";

export const MOUSECLICKMODE: MouseClickMode = { ADDING: 'adding', RELOADING: 'reloading', QUESTIONING: 'questioning', EDITING: 'editing' };


export const SCREEN_LIST_BUTTON = [
    {
        svgIcon: 'REFRESH_ICON',
        mouseClickMode: MOUSECLICKMODE.RELOADING,
        mouseClickEvent: new MouseEvent('click'),
        active: true
    },
    {
        svgIcon: 'ADD_ICON',
        mouseClickMode: MOUSECLICKMODE.ADDING,
        mouseClickEvent: new MouseEvent('click'),
        active: true
    },
    {
        svgIcon: 'QUESTIONING',
        mouseClickMode: MOUSECLICKMODE.ADDING,
        mouseClickEvent: new MouseEvent('click'),
        active: false
    },
];