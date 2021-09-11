import { Actions, ActionsElement, TableReuseableColumns } from './table-reuseable-columns.interface';
import { TableReuseable } from './table-reuseable.interface';

export class TableReuseableConfig implements TableReuseable {
    cols: TableReuseableColumns[];
    ELEMENT_DATA: any[];
    constructor(cols: TableReuseableColumns[], datas: any[]) {
        this.cols = cols;
        this.ELEMENT_DATA = datas;
    }
    onActionHandler(event: ActionsElement): void {
        console.log(event.elementdata, event.action);
    }
}
