
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Sticky } from './sticky.interface';
import { WINDOW } from './window.service';
@Injectable({
    providedIn: 'root'
})
export class StickyService {

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    onElementSticky(sticky: Sticky): void {
        if ((sticky.offset || 0) >= (sticky.offsetStickyElement || 0)) {
            sticky.stickyElement?.classList.add(sticky.stickyClassName);
        } else {
            sticky.stickyElement?.classList.remove(sticky.stickyClassName);
        }
    }
    onElementStickies(stickies: Sticky[]): void {
        for (const sticky of stickies) {
            if ((sticky.offset || 0) >= (sticky.offsetStickyElement || 0)) {
                sticky.stickyElement?.classList.add(sticky.stickyClassName);
            } else {
                sticky.stickyElement?.classList.remove(sticky.stickyClassName);
            }
        }
    }
}
