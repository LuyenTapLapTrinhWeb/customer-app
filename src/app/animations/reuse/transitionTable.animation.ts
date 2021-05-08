
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
export function transitionY(): any {
    return trigger('transitionY', [
        state('inactive', style({
            opacity: 0,
            transform: 'transitionX(-100%)'
        })),
        transition('*=>*',
            animate(1100, keyframes([
                style({ opacity: 0, transform: 'translateX(0)', offset: 0 }),
                style({ opacity: 1, transform: 'translateX(15px) scale(1.04)', offset: .3 }),
                style({ opacity: 1, transform: 'translateX(0) scale(1)', offset: .8 })
            ]))
        )
    ]);
}
