export interface ISvgIconLiteral {
    matIconCustomName: string;
    svgCustomVector: string;
    addMatIconSvgCustom?: (matIconSrc: ISvgIconLiteral) => void;
    addMultiMatIconSvgCustom?: (matIconSrc: ISvgIconLiteral[]) => void;
}
