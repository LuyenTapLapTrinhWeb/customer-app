import { ToDieuTri } from './TODIEUTRI';

export const TODIEUTRI: ToDieuTri[] = [
    {
        ngaygio: new Date(2002,2,2,2,2),
        dienbien: {
            bacsi: { id: '1', name: 'name 1' },
            chamsoc: { id: '1', name: 'name 1' },
            chisosuckhoe: { mota: '' },
        },
        ylenh: {
            bacsi: { id: '1', name: 'name 1' },
            chidinhdichvu: { mota: '' },
            todieutri: '',
        },
        in: false,
        ky: false
    },
    {
        ngaygio: new Date(1998,12,30,12,5,59),
        dienbien: {
            bacsi: { id: '2', name: 'name 2' },
            chamsoc: { id: '2', name: 'name 2' },
            chisosuckhoe: { mota: '' },
        },
        ylenh: {
            bacsi: { id: '2', name: 'name 2' },
            chidinhdichvu: { mota: '' },
            todieutri: '',
        },
        in: false,
        ky: false
    },
    {
        ngaygio: new Date(2002,12,30,12,5,59),
        dienbien: {
            bacsi: { id: '2', name: 'name 2' },
            chamsoc: { id: '2', name: 'name 2' },
            chisosuckhoe: { mota: '' },
        },
        ylenh: {
            bacsi: { id: '2', name: 'name 2' },
            chidinhdichvu: { mota: '' },
            todieutri: '',
        },
        in: true,
        ky: true
    },
]