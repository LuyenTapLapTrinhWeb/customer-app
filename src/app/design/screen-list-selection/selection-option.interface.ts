import { SelectionList } from './selection-list.interface';

export interface SelectionOptionList {
    title: string;
    list: SelectionList[];
    selectionError?: string;
}
