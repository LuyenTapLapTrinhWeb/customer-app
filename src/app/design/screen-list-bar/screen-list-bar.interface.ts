import { ScreenListButton } from '../screen-list-button/screen-list-button.interface';


export interface ScreenListBar {
    title: string;
    buttons: ScreenListButton[];
    tooltiptext?: string;
    isPanelOpenState?: boolean;
    isPanelExpansion?: boolean;
}
