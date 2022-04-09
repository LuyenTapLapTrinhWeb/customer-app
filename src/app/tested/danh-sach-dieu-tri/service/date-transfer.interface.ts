import { DatePositionFormat, DateSymbolFormat } from "./date-symbol-format.enum";

export interface IPropertyTranferDate {
    newDate: Date,
    datePosition?: DatePositionFormat,
    dateSymbol?: DateSymbolFormat,
}