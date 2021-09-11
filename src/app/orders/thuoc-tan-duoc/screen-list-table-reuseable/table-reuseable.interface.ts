import { Actions, TableReuseableColumns } from './table-reuseable-columns.interface';

export interface TableReuseable {
    cols: TableReuseableColumns[];
    ELEMENT_DATA: any[];
    onActionHandler: (elementdata?: any, action?: Actions) => void;
}
