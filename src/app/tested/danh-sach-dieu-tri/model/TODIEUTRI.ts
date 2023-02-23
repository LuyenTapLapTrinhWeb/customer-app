import { YLenh } from '../model/YLENH';
import { DienBien } from '../model/DIENBIEN';

export interface ToDieuTri {
    ngaygio: Date;
    dienbien: DienBien
    ylenh: YLenh
    ky: boolean;
    in: boolean;
}