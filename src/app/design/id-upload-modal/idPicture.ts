export class IdPicture {
    id?: string;
    idType?: string;
    title?: string;
    areaname?: string;
    name?: string;
    typeImage?: string;
    size?: number;
    sizeKB?: number;
    lastModifiedDate?: Date;
    lastModifiedDateISOstring?: string;
    imageURL?: string;
    frontside?: boolean;
    backside?: boolean;
    filefrontside?: File;
    filebackside?: File;
    filePicture?: File;
    idPicture?: IdPicture;
    countingOpen?: number;
}
export const IDTYPEPICTURES = ['CMND', 'CCCD', 'PP'];