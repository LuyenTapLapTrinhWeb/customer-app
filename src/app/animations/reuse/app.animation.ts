import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

export function visibility(): any {
    return trigger('visibility', [
        state('shown', style({
            transform: 'scale(1.0)',
            opacity: 1
        })),
        state('hidden', style({
            transform: 'scale(0.5)',
            opacity: 0
        })),
        transition('* => *', animate('0.5s ease-in-out'))
    ]);
}
export function toggleTrigger(): any {
    return trigger('toggleTrigger', [
        state('fadeIn', style({
            opacity: 1,
        })),
        transition('void => *', [
            style({
                opacity: 0,
                transform: 'translateY(20px)'
            }),
            animate('500ms')
        ])
    ])
}
export function myFadeInTrigger(): any {
    return trigger('myTrigger', [
        state('small', style({
            transform: 'scale(1)'
        })),
        state('large', style({
            transform: 'scale(1.4)'
        })),
        state('fadeIn', style({
            opacity: 1,
            transform: 'scale(1)',
            offset: .1
        })),
        // transition('small => large', animate('500ms')),
        // transition('large => small', animate('500ms'))
        // transition('large => small, small => large', animate('500ms'))
        // transition('large <=> small', animate('500ms')),
        // transition('void => *', [
        //     style({
        //         opacity: 0,
        //         transform: 'translateY(-50%)'
        //     }),
        //     animate('400ms 100ms ease-in')
        // ])
        transition('void => *', [
            animate(1100, keyframes([
                style({ opacity: 0, transform: 'translateY(-100%)', offset: 0 }),
                style({ opacity: 1, transform: 'translateY(5px) scale(1.5)', offset: .3 }),
                style({ opacity: .5, transform: 'translateY(0) scale(1.1)', offset: .8 }),
            ]))
        ])
    ]);
}
export function flyInOut(): any {
    return trigger('flyInOut', [
        state('*', style({ opacity: 1, transform: 'translateX(0)', height: '100%'})),
        transition(':enter', [style({ opacity: 0, transform: 'translateX(-5%)' }), animate('600ms 1s ease-in')]),
        // transition(':leave', [style({ opacity: 0, transform: 'translateY(100%)' }), animate('500ms ease-out')]),
    ]);
}
