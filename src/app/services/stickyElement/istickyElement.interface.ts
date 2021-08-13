import { ISticky } from './isticky.interface';


export interface IStickyElement {
    sticky: ISticky;
    _stickies: ISticky[];
    onElementSticky: (offset: number) => void;
    onElementStickiesOffset: (offset: number) => void;
}