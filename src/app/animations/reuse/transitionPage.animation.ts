import { trigger, state, style, transition, animate } from '@angular/animations';
export function transitionPage(): any {
    return trigger('transition', [
        state('in', style({ transform: 'translateY(0)', opacity: 0 })),
        transition('void=>*', [
            style({ transform: 'translateY(-15px', opacity: 1 }),
            animate(300)
        ])
    ]);
}
