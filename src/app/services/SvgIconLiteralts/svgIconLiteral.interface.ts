import { Router } from '@angular/router';
import { IconOptions } from '@angular/material/icon';
import { SafeHtml } from '@angular/platform-browser';
import { Observable } from 'rxjs';

export interface ISvgIconLiteral {
    matIconCustomName: string;
    svgCustomVector: string;
}
export interface ISvgIconFillCurrentColor {
    matTooltip: string;
    isSvgIconHover: boolean;
    isSvgIconActive: boolean;
    svgIcon?: {
        svgIconName: string;
        svgIconNameHover: string;
        svgIconNameActive: string;
    };
    matIconMaterial?: {
        isMatIconMaterial: boolean,
        matIconCustomName: string,
    };
    routerLink: string;
}
export interface AbstractSvgIconLiteral {
    addMatIconSvgCustom: (matIconSrc: ISvgIconLiteral) => void;
    addSvgIconInNamespace?: (namespace: string, matIconSrc: ISvgIconLiteral, literal?: SafeHtml, options?: IconOptions) => void;
    addMultiMatIconSvgCustom?: (matIconSrc: ISvgIconLiteral[]) => void;
    getMatIconSVGByName?: (matIconCustomName: string) => Observable<ISvgIconLiteral>;
    getMatIconSVGByGroupName?: (GROUP_NAME: string[]) => Observable<ISvgIconLiteral[]>;
    addMatIconSvgCustomObservable?: (matIconCustomName: string) => void;
    addMultiMatIconSvgCustomObservable?: (matIconMultipleCustomName: string[]) => void;
}
export abstract class AbstractSvgIconFillCurrentColor {
    abstract hoverSvgIcon(svg: ISvgIconFillCurrentColor, event: Event): void;
    abstract activeSvgIcon(svg: ISvgIconFillCurrentColor, event: Event, svgs: ISvgIconFillCurrentColor[]): void;
    abstract getSvgIcon(svg: ISvgIconFillCurrentColor): string;
    abstract getMaterialIcon(svg: ISvgIconFillCurrentColor): string;
}
