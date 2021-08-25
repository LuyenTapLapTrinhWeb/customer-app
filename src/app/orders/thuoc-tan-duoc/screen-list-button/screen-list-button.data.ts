import { MouseClickMode } from './screen-list-button.interface';

export const MOUSECLICKMODE: MouseClickMode = {
    ADDING: 'adding', RELOADING: 'reloading', QUESTIONING: 'questioning', EDITING: 'editing',

};

export const SVGICON = {
    ADDING: 'ADD_ICON', RELOADING: 'REFRESH_ICON', QUESTIONING: 'QUESTION_MARK'
};

export const MOUSECLICKEVENT = {
    EVENT: new MouseEvent('click'),
};

const ADDING = {
    svgIcon: SVGICON.ADDING,
    mouseClickMode: MOUSECLICKMODE.ADDING,
    mouseClickEvent: MOUSECLICKEVENT.EVENT,
    active: true
};
const RELOADING = {
    svgIcon: SVGICON.RELOADING,
    mouseClickMode: MOUSECLICKMODE.RELOADING,
    mouseClickEvent: MOUSECLICKEVENT.EVENT,
    active: true
};
const QUESTIONING = {
    svgIcon: SVGICON.QUESTIONING,
    mouseClickMode: MOUSECLICKMODE.QUESTIONING,
    mouseClickEvent: MOUSECLICKEVENT.EVENT,
    active: true
};

export const SCREEN_LIST_BUTTON = [ADDING, RELOADING, QUESTIONING];

export { ADDING, RELOADING, QUESTIONING };
