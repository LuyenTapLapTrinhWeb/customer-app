import { BacSi } from "./BACSI"
import { ChiDinhDichVu } from "./CHIDINHDICHVU"

export interface YLenh {
    bacsi: BacSi,
    todieutri: string
    chidinhdichvu: ChiDinhDichVu
}