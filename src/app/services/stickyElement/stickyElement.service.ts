
import { ISticky } from './isticky.interface';
import { IStickyElement } from './istickyElement.interface';

export class StickyElement implements IStickyElement {

    sticky!: ISticky;
    // tslint:disable-next-line:variable-name
    _stickies!: ISticky[];
    get stickies(): ISticky[] {
        return this._stickies;
    }
    set stickies(value: ISticky[]) {
        this.stickies = value;
    }
    // tslint:disable-next-line:variable-name
    constructor(sticky?: ISticky, _stickies?: ISticky[]) {
        if (_stickies) { this._stickies = _stickies; }
        if (sticky) { this.sticky = sticky; }
    }

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    public onElementSticky(offset: number): void {
        if (offset >= this.sticky.offsetStickyElement) {
            this.sticky.stickyElement.classList.add(this.sticky.stickyClassName);
        } else {
            this.sticky.stickyElement.classList.remove(this.sticky.stickyClassName);
        }
    }
    public onElementStickiesOffset(offset: number): void {
        for (const sticky of this.stickies) {
            if (offset >= sticky.offsetStickyElement) {
                sticky.stickyElement.classList.add(sticky.stickyClassName);
            } else {
                sticky.stickyElement.classList.remove(sticky.stickyClassName);
            }
        }
    }
}
