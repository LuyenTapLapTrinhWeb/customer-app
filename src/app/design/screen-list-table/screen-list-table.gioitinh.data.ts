export interface GIOITINH {
    FEMALE: string;
    MALE: string;
    NANONEICON: string;
    NAICON: string;
}
export const gioitinh: GIOITINH = {
    FEMALE: 'gioi-tinh-female',
    MALE: 'gioi-tinh-male',
    NAICON: 'gioi-tinh-na',
    NANONEICON: '',
};
export const VALUESGIOITINH = { 1: gioitinh.FEMALE, 2: gioitinh.MALE, 3: gioitinh.NANONEICON }