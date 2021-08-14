import { MatPaginatorIntl } from '@angular/material/paginator';


export function CustomPaginator(): MatPaginatorIntl {
    const customPaginatorIntl = new MatPaginatorIntl();

    customPaginatorIntl.itemsPerPageLabel = 'Kết quả hiển thị mỗi trang :';

    return customPaginatorIntl;
}
