import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { AbstractSvgIconLiteral, ISvgIconFillCurrentColor, ISvgIconLiteral } from './svgIconLiteral.interface';
import { MATICONSVG } from './svgIconLiteral.data';
import { from, Observable, of } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class SvgIconLiteralService implements ISvgIconLiteral, AbstractSvgIconLiteral {
    matIconCustomName!: string;
    svgCustomVector!: string;
    matIconSVG: ISvgIconLiteral[] = MATICONSVG;
    constructor(
        private iconRegistry: MatIconRegistry,
        private sanitizer: DomSanitizer,
    ) {

    }
    addMatIconSvgCustom(matIconSrc: ISvgIconLiteral): void {
        this.iconRegistry.addSvgIconLiteral(matIconSrc.matIconCustomName,
            this.sanitizer.bypassSecurityTrustHtml(matIconSrc.svgCustomVector));
    }
    addSvgIconInNamespace(namespace: string, matIconSrc: ISvgIconLiteral): void {
        // this.iconRegistry.addSvgIconLiteralInNamespace('user', 'menu_icon', this.sanitizer.bypassSecurityTrustHtml(MENU_ICON));
        this.iconRegistry.addSvgIconLiteralInNamespace(namespace, matIconSrc.matIconCustomName,
            this.sanitizer.bypassSecurityTrustHtml(matIconSrc.svgCustomVector));
    }

    addMultiMatIconSvgCustom(matIconSrc: ISvgIconLiteral[]): void {
        for (const i of matIconSrc) {
            this.iconRegistry.addSvgIconLiteral(i.matIconCustomName, this.sanitizer.bypassSecurityTrustHtml(i.svgCustomVector));
        }
    }

    getMatIconSVGByName(matIconCustomName: string): Observable<ISvgIconLiteral> {
        return from(this.matIconSVG).pipe(filter(svg => svg.matIconCustomName === matIconCustomName));
    }
    getMatIconSVGByGroupName(GROUP_NAME: string[]): Observable<ISvgIconLiteral[]> {
        const GROUPNAME$: ISvgIconLiteral[] = [];
        GROUP_NAME.map(matIconCustomName => {
            from(this.matIconSVG).pipe(
                filter(svg => svg.matIconCustomName.toLowerCase() === matIconCustomName.toLowerCase())
            ).subscribe(dd => {
                GROUPNAME$.push(dd);
            }, error => console.log(error));
        });
        return of(GROUPNAME$);
    }
    addMatIconSvgCustomObservable(matIconCustomName: string): void {
        this.getMatIconSVGByName(matIconCustomName)
            .pipe(tap(matIconSrc => console.log(matIconSrc)))
            .subscribe(matIconSrc => {
                this.addMatIconSvgCustom(matIconSrc);
            }, error => console.log(error));
    }
    addMultiMatIconSvgCustomObservable(matIconMultipleCustomName: string[]): void {
        this.getMatIconSVGByGroupName(matIconMultipleCustomName).subscribe(matIconSrc => {
            this.addMultiMatIconSvgCustom(matIconSrc);
            matIconSrc.map(data => {
            });
        }, error => console.log(error));
    }
}
