import { Observable } from 'rxjs';

export interface ISvgIconLiteral {
    matIconCustomName: string;
    svgCustomVector: string;
    addMatIconSvgCustom?: (matIconSrc: ISvgIconLiteral) => void;
    addMultiMatIconSvgCustom?: (matIconSrc: ISvgIconLiteral[]) => void;
    getMatIconSVGByName?: (matIconCustomName: string) => Observable<ISvgIconLiteral>;
    getMatIconSVGByGroupName?: (GROUP_NAME: string[]) => Observable<ISvgIconLiteral[]>;
    addMatIconSvgCustomObservable?: (matIconCustomName: string) => void;
    addMultiMatIconSvgCustomObservable?: (matIconMultipleCustomName: string[]) => void;
}
