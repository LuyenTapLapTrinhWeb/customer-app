import { ActionsElement, TableReuseableColumns } from './screen-list-table-config.interface';
import { ScreenListTableComponent } from './screen-list-table.interface';

export class TableReuseableConfig implements ScreenListTableComponent {
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
