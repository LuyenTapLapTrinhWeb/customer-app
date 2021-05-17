import { animate, animation, state, style, transition, trigger } from '@angular/animations';

export function SlideIn(): any {
    return trigger('slidein', [
        state('from', style({ transform: 'translateY(0)' })),
        state('to', style({ transform: 'translateY(15px)' })),
        transition('from=>to', animate('.5s ease-in'))
    ]);
}
export function Stretching(): any {
    return trigger('stretching', [
        state('from', style({ width: '100px' })),
        state('to', style({ width: '210px' })),
        transition('from=>to', animate('.5s ease-in')),
        transition('to=>from', animate('.5s ease-in'))
    ]);
}
