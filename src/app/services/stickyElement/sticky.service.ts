
import { Injectable } from '@angular/core';
import { Sticky } from './sticky.interface';
@Injectable({
    providedIn: 'root'
})
export class StickyService {
    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    onElementSticky(sticky: Sticky): void {
        if ((sticky.offsetCurrentWindow || 0) >= (sticky.stickyElementOffset || 0)) {
            sticky.stickyElementHTML?.classList.add(sticky.stickyClassName);
        } else {
            sticky.stickyElementHTML?.classList.remove(sticky.stickyClassName);
        }
    }
    onElementStickies(stickies: Sticky[]): void {
        for (const sticky of stickies) {
            if ((sticky.offsetCurrentWindow || 0) >= (sticky.stickyElementOffset || 0)) {
                sticky.stickyElementHTML?.classList.add(sticky.stickyClassName);
            } else {
                sticky.stickyElementHTML?.classList.remove(sticky.stickyClassName);
            }
        }
    }
}
