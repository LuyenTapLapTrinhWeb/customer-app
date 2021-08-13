import { Injectable } from '@angular/core';
import { ISticky } from './isticky.interface';
import { StickyElement } from './stickyElement.service';


@Injectable({
    providedIn: 'root',
})
export class OffsetService {
    //#region variable
    // tslint:disable-next-line:variable-name
    _offset!: number;
    // Get the navbar
    screenlistsearch!: HTMLElement;

    // Get the offset position of the navbar

    stickyscreenlistsearch!: number;
    stickies!: ISticky[];
    nav: StickyElement;
    //#endregion

    constructor() {
        /* stickyaside stickydrawersidenav sticky*/
        this.nav = new StickyElement();
    }
    set offset(offset: number) { this._offset = offset; }
    get offset(): number { return this._offset; }

    onActionSticky(): StickyElement {
        this.screenlistsearch = document.getElementById('screen-list-search');
        // Get the offset position of the navbar

        this.stickyscreenlistsearch = this.screenlistsearch.offsetTop;
        /* stickyaside stickydrawersidenav sticky*/
        this.stickies = [
            {
                offset: this.offset || 0, offsetStickyElement: this.stickyscreenlistsearch,
                stickyElement: this.screenlistsearch, stickyClassName: 'screenlistsearch'
            },
        ];
        this.nav = new StickyElement(undefined, this.stickies);
        return this.nav;
    }
}
