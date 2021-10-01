import { ActionsEvent } from '../screen-list-table/screen-list-table-config.interface';
import { MouseClickMode } from './screen-list-button.interface';

export const MOUSECLICKMODE: MouseClickMode = {
    ADDING: 'adding',
    RELOADING: 'reloading',
    QUESTIONING: 'questioning',
    EDITING: 'editing',
    DELETING: 'deleting',
    EXPORTEXCEL: 'exportexcel',
    CANCELING: 'canceling',
    LOCKING: 'locking',
};
export const SVGICON = {
    ADDING: 'ADD_ICON',
    RELOADING: 'REFRESH_ICON',
    QUESTIONING: 'QUESTION_MARK',
    DELETING: 'delete-recycle-bin',
    EDITING: 'edit-pencil',
    EXPORTEXCEL: 'export-excel-file',
    CANCELING: 'cancel',
    LOCKING: 'lock',
    GIOITINHFEMALE: 'gioi-tinh-female',
    GIOITINHMALE: 'gioi-tinh-male',
    GIOITINHNA: 'gioi-tinh-na',
};

export const MOUSECLICKEVENT = {
    EVENT: new MouseEvent('click'),
};
export const ACTIONSEVENTID = {
    ADDING: 0,
    EDITING: 1,
    RELOADING: 2,
    DELETING: 3,
    EXPORTEXCEL: 4,
    QUESTIONING: 5,
    CANCELING: 6,
    LOCKING: 7,
};

const ADDING = {
    id: ACTIONSEVENTID.ADDING,
    svgIcon: SVGICON.ADDING,
    mouseClickMode: MOUSECLICKMODE.ADDING,
    mouseClickEvent: MOUSECLICKEVENT.EVENT,
    active: true,
    tooltip: 'Thêm mới'

};
const RELOADING: ActionsEvent = {
    id: ACTIONSEVENTID.RELOADING,
    svgIcon: SVGICON.RELOADING,
    mouseClickMode: MOUSECLICKMODE.RELOADING,
    mouseClickEvent: MOUSECLICKEVENT.EVENT,
    active: true,
    tooltip: 'Làm mới danh sách'
};
const QUESTIONING: ActionsEvent = {
    id: ACTIONSEVENTID.QUESTIONING,
    svgIcon: SVGICON.QUESTIONING,
    mouseClickMode: MOUSECLICKMODE.QUESTIONING,
    mouseClickEvent: MOUSECLICKEVENT.EVENT,
    active: true,
    tooltip: '?'
};
const DELETING: ActionsEvent = {
    id: ACTIONSEVENTID.DELETING,
    svgIcon: SVGICON.DELETING,
    mouseClickMode: MOUSECLICKMODE.DELETING,
    mouseClickEvent: MOUSECLICKEVENT.EVENT,
    active: true,
    tooltip: 'Xóa'
};
const EDITING: ActionsEvent = {
    id: ACTIONSEVENTID.EDITING,
    svgIcon: SVGICON.EDITING,
    mouseClickMode: MOUSECLICKMODE.EDITING,
    mouseClickEvent: MOUSECLICKEVENT.EVENT,
    active: true,
    tooltip: 'Sửa'
};
const EXPORTINGEXCEL: ActionsEvent = {
    id: ACTIONSEVENTID.EXPORTEXCEL,
    svgIcon: SVGICON.EXPORTEXCEL,
    mouseClickMode: MOUSECLICKMODE.EXPORTEXCEL,
    mouseClickEvent: MOUSECLICKEVENT.EVENT,
    active: true,
    tooltip: 'Xuất Excel'
};
const CANCELING: ActionsEvent = {
    id: ACTIONSEVENTID.CANCELING,
    svgIcon: SVGICON.CANCELING,
    mouseClickMode: MOUSECLICKMODE.CANCELING,
    mouseClickEvent: MOUSECLICKEVENT.EVENT,
    active: true,
    tooltip: 'Hủy hiệu lực'
};
const LOCKING: ActionsEvent = {
    id: ACTIONSEVENTID.LOCKING,
    svgIcon: SVGICON.LOCKING,
    mouseClickMode: MOUSECLICKMODE.LOCKING,
    mouseClickEvent: MOUSECLICKEVENT.EVENT,
    active: true,
    tooltip: 'Khóa'
};
const TOOLTIPTEXT = 'Mở rộng chức năng';

export const SCREEN_LIST_BUTTON_DEFAULT = [QUESTIONING, RELOADING, ADDING];

export const BARSVGICONS = [
    SVGICON.ADDING, SVGICON.RELOADING,
    SVGICON.QUESTIONING, SVGICON.DELETING,
    SVGICON.EDITING, SVGICON.EXPORTEXCEL,
    SVGICON.GIOITINHFEMALE,
    SVGICON.GIOITINHMALE,
    SVGICON.GIOITINHNA,
];

export { ADDING, RELOADING, QUESTIONING, DELETING, EDITING, EXPORTINGEXCEL, CANCELING, LOCKING, TOOLTIPTEXT };
