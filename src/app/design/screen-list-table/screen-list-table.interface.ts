import { MatTableDataSource } from '@angular/material/table';
import { ActionsEvent, TableReuseableColumns } from './screen-list-table-config.interface';

export interface ScreenListTableComponent {
    cols: TableReuseableColumns[];
    ELEMENT_DATA: any[];
    dataSource?: MatTableDataSource<any>;
    onActionHandler: (elementdata?: any, action?: ActionsEvent) => void;
}
