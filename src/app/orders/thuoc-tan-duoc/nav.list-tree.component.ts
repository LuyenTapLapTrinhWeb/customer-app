export interface ListMenuTreeData {
    name: string;
    mouseClickId?: string;
    mouseClickName?: string;
    svgIcon?: string;
    svgIconEnter?: string;
    matIconId?: string;
    children?: ListMenuTreeData[];
}

export const TREE_DATA: ListMenuTreeData[] = [
    {
        name: 'Hồ sơ', svgIcon: 'ho-so', svgIconEnter: 'ho-so-enter', matIconId: 'navbarDropdownHoSo', children: [
            { name: 'Hồ sơ sức khỏe', mouseClickId: 'addTab2', mouseClickName: 'ho-so-suc-khoe', children: [] },
            { name: 'Tìm kiếm hồ sơ', mouseClickId: 'addTab2', mouseClickName: 'tra-cuu-ho-so', children: [] },
            { name: 'Thăm khám bệnh', mouseClickId: 'onHoSoThamKhamBenhClick', mouseClickName: '', children: [] },
            { name: 'Hồ sơ bệnh án', mouseClickId: 'addTab2', mouseClickName: 'ho-so-benh-an', children: [] },
            { name: 'Đọc hồ sơ bệnh án từ XML', mouseClickId: 'addTab2', mouseClickName: 'doc-ho-so-benh-an-xml', children: [] },
            { name: 'Hộ gia đình', mouseClickId: 'addTab2', mouseClickName: 'hs-ho-gia-dinh', children: [] },
            { name: 'Khảo sát thu thập thông tin', mouseClickId: 'addTab2', mouseClickName: 'khao-sat-thu-thap-thong-tin', children: [] },
            // tslint:disable-next-line:max-line-length
            { name: 'Duyệt hồ sơ thu thập thông tin', mouseClickId: 'addTab2', mouseClickName: 'duyet-hs-thu-thap-thong-tin', children: [] },
        ]
    },
    {
        name: 'Danh mục', svgIcon: 'danh-muc', svgIconEnter: 'danh-muc-enter', matIconId: 'navbarDropdownDanhMuc', children: [
            { name: 'Danh sách cơ sở khám chữa bệnh', mouseClickId: 'addTab2', mouseClickName: 'thong-tin-co-so', children: [] },
            {
                name: '1. Danh mục thuốc', children: [
                    { name: '1.1. Danh mục thuốc tân dược', mouseClickId: 'addTab2', mouseClickName: 'thuoc-tan-duoc', children: [] },
                    { name: '1.2. Danh mục thuốc YHCT', mouseClickId: 'addTab2', mouseClickName: 'thuoc-yhct', children: [] },
                    { name: '1.3. Danh mục vị thuốc YHCT', mouseClickId: 'addTab2', mouseClickName: 'vi-thuoc-yhct', children: [] },
                ]
            },
            {
                name: '2. Danh mục bệnh', children: [
                    { name: '2.1. Bệnh theo ICD10', mouseClickId: 'addTab2', mouseClickName: 'benh-theo-icd10', children: [] },
                    { name: '2.2. Bệnh theo YHCT', mouseClickId: 'addTab2', mouseClickName: 'benh-theo-yhct', children: [] },
                ]
            },
            {
                name: '3. Danh mục vật tư y tế', mouseClickId: 'addTab2', mouseClickName: 'dm-vat-tu-y-te', children: []
            },
            {
                name: '4. Danh mục các xét nghiệm', children: [
                    {
                        name: '4.1. Danh mục các xét nghiệm Huyết học, hóa sinh, y sinh', mouseClickId: 'addTab2', mouseClickName: 'xn-hoa-sinh-vi-sinh'
                        , children: []
                    },
                    {
                        name: '4.2. Danh mục các chẩn đoán hình ảnh & nội soi', mouseClickId: 'addTab2', mouseClickName: 'ho-so-suc-khoe'
                        , children: []
                    },
                ]
            },
            {
                name: '5. Danh mục các thủ thuât, phẫu thuật', mouseClickId: 'addTab2', mouseClickName: 'dm-thu-thuat-phau-thuat'
                , children: []
            },
            {
                name: '6. Danh mục máu và chế phẩm máu', mouseClickId: 'addTab2', mouseClickName: 'dm-mau-va-che-pham'
                , children: []
            },
            {
                name: 'Giáo dục', children: [
                    { name: 'Trường học', mouseClickId: 'addTab2', mouseClickName: 'gd-truong-hoc', children: [] },
                    { name: 'Lớp học', mouseClickId: 'addTab2', mouseClickName: 'gd-lop-hoc', children: [] },
                    { name: 'Phân lớp', mouseClickId: 'addTab2', mouseClickName: 'gd-phan-lop', children: [] },
                ]
            },
        ]
    },
    {
        name: 'Quản trị', svgIcon: 'quan-tri', svgIconEnter: 'quan-tri-enter', matIconId: 'navbarDropdownQuanTri', children: [
            { name: 'Quản trị người dùng', mouseClickId: 'addTab2', mouseClickName: 'quan-tri-nguoi-dung', children: [] },
            { name: 'Kết quả thực hiện', mouseClickId: 'addTab2', mouseClickName: 'ket-qua-thuc-hien', children: [] },
            { name: 'Thống kê hồ sơ 831', mouseClickId: 'addTab2', mouseClickName: 'thong-ke-hs831', children: [] },
            { name: 'Nhật ký truy nhập', mouseClickId: 'addTab2', mouseClickName: 'nhat-ky-truy-nhap', children: [] },
        ]
    },
    {
        name: 'Trợ giúp', svgIcon: 'tro-giup', svgIconEnter: 'tro-giup-enter', matIconId: 'navbarDropdownTroGiup', children: [
            { name: 'Xem log hệ thống', mouseClickId: 'addTab2', mouseClickName: 'log-he-thong', children: [] },
            { name: 'Tổng quan', mouseClickId: 'addTab2', mouseClickName: 'tro-giup-tong-quan', children: [] },
        ]
    },
    {
        name: 'Hệ thống', svgIcon: 'he-thong', svgIconEnter: 'he-thong-enter', matIconId: 'navbarDropdownHeThong', children: [
            { name: 'Đổi mật khẩu', mouseClickId: 'doiMatKhau', mouseClickName: '', children: [] },
            { name: 'Thoát', mouseClickId: 'logout', mouseClickName: '', children: [] },
        ]
    }
];
