import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

export function colorChange(): any {
    return trigger('colorChange', [
        state('*', style({
            opacity: 1,
            background: 'black',
        })),
        transition('* => *', [
            animate('4s ease-in-out', keyframes([
                style({ opacity: 0, background: '#fafafa', offset: 2 }),
                style({ opacity: 0, background: '#ccc', offset: 2 }),
                style({ opacity: 0, background: 'black', offset: 0 }),
            ]))
        ])
    ]);
}