import { DateSymbolFormat, DatePositionFormat } from './date-symbol-format.enum';
import { IPropertyTranferDate } from './date-transfer.interface';
/* https://bobbyhadz.com/blog/javascript-format-date-dd-mm-yyyy */
/* Format a Date as DD/MM/YYYY in JavaScript  */
/* Borislav Hadzhiev

Sun Oct 24 2021·2 min read

 */
/* To format a date as dd/mm/yyyy:

Use the getDate(), getMonth() and getFullYear() methods to get the day, month and year for the specific date.
Add a leading zero to the day and month digits if the value is less than 10 to always get consistent results.
Add the results to an array and join them with a forward slash separator.
We created a padTo2Digits function, which takes care of adding a leading zero if the month or day only contain a single digit (are less than 10).
We want to make sure that the result is always consistent and has 2 digits for the months and days, so we used the padStart method.

============================================================================================================================
information! 
The first parameter we passed to the padTo2Digits function is the total length of the string, so it will never pad the day or month if they already have 2 digits.
The next function we created is the one that formats a date to dd/mm/yyyy.
============================================================================================================================

The function makes use of the following 3 Date related methods.

Date.getDate - returns an integer between 1 and 31 representing the day of the month for a specific date.

Date.getMonth - returns an integer between 0 (January) and 11 (December) and represents the month for a given date. Yes, unfortunately the getMonth method is off by 1.

Date.getFullYear method - returns a four-digit number representing the year that corresponds to a date.

============================================================================================================================
************
*important!* The getMonth method returns a zero-based month index from 0 to 11, meaning January is 0 and December is 11.
************
============================================================================================================================

Because the getMonth method is zero-based we added 1 to its return value.

The last thing we did in the function is place the results in an array, so we can join them with a forward slash / separator.

console.log(['28', '06', '2027'].join('/')); // 👉️ '28/06/2027'
console.log(['16', '09', '2026'].join('/')); // 👉️ '16/09/2026'

This formats the date as dd/mm/yyyy. Here's the complete code snippet.

 */
export class TransferDate {
    static defaultDateSymbol: string = '/';
    static defaultDatePosition: string = 'mmddyyyy';
    static padTo2Digits(num): any {
        return num.toString().padStart(2, '0');
    }
    /**
     * @dateSymbol  ['/', '-', '_'] list enum symbol
     * @newDate new Date()
     * @logExample
     ** console.log(this.formatDate(new Date()));
     ** console.log(this.formatDate(new Date(2027, 6, 24)));
     ** console.log(this.formatDate(new Date(2027, 6, 24), DateSymbolFormat.slash));
     ** console.log(this.formatDate(new Date(2027, 6, 24), DateSymbolFormat.dash));
     ** console.log(this.formatDate(new Date(2027, 6, 24), DateSymbolFormat.undercore));
     */
    static formatDateNow(ipdt: IPropertyTranferDate): string {
        // default result
        if (!ipdt.newDate) {
            console.error('no date to format');
            return;
        }
        let result = [
            TransferDate.padTo2Digits(ipdt.newDate.getDate()),
            TransferDate.padTo2Digits(ipdt.newDate.getMonth() + 1),
            ipdt.newDate.getFullYear(),
        ].join(ipdt.dateSymbol ? ipdt.dateSymbol : TransferDate.defaultDateSymbol);
        // condition result
        if (ipdt.datePosition) {
            result = TransferDate.conditionDateFormat(ipdt);
        }
        return result;
    }
    static formatTimeNow(ipdt: IPropertyTranferDate): any {
        // default result
        if (!ipdt.newDate) {
            console.error('no date to format');
            return;
        }
        let result = [
            TransferDate.padTo2Digits(ipdt.newDate.getHours()),
            TransferDate.padTo2Digits(ipdt.newDate.getMinutes()),
            // TransferDate.padTo2Digits(ipdt.newDate.getSeconds()),
        ].join(':');
        return result;
    }
    static formatDateTimeNow(newDate: Date, dateSymbol?: DateSymbolFormat) {
        let date = [
            TransferDate.padTo2Digits(newDate.getDate()),
            TransferDate.padTo2Digits(newDate.getMonth() + 1),
            newDate.getFullYear(),
        ].join(dateSymbol ? dateSymbol : TransferDate.defaultDateSymbol);
        let time = [
            TransferDate.padTo2Digits(newDate.getHours()),
            TransferDate.padTo2Digits(newDate.getMinutes()),
            // TransferDate.padTo2Digits(ipdt.newDate.getSeconds()),
        ].join(':');
        return `${date} ${time}`
    }
    static conditionDateFormat(iDtrans: IPropertyTranferDate): string {
        let resultConditionFormat: string = '';
        if (iDtrans.datePosition.includes(DatePositionFormat.ddmmyyyy)) {
            resultConditionFormat = [
                this.padTo2Digits(iDtrans.newDate.getDate()),
                this.padTo2Digits(iDtrans.newDate.getMonth() + 1),
                iDtrans.newDate.getFullYear(),
            ].join(iDtrans.dateSymbol ? iDtrans.dateSymbol : TransferDate.defaultDateSymbol);
        } else if (iDtrans.datePosition.includes(DatePositionFormat.mmddyyyy)) {
            resultConditionFormat = [
                this.padTo2Digits(iDtrans.newDate.getMonth() + 1),
                this.padTo2Digits(iDtrans.newDate.getDate()),
                iDtrans.newDate.getFullYear(),
            ].join(iDtrans.dateSymbol ? iDtrans.dateSymbol : TransferDate.defaultDateSymbol);
        } else if (iDtrans.datePosition.includes(DatePositionFormat.yyyymmdd)) {
            resultConditionFormat = [
                iDtrans.newDate.getFullYear(),
                this.padTo2Digits(iDtrans.newDate.getMonth() + 1),
                this.padTo2Digits(iDtrans.newDate.getDate()),
            ].join(iDtrans.dateSymbol ? iDtrans.dateSymbol : TransferDate.defaultDateSymbol);
        }
        return resultConditionFormat
    }
    static logExample(date: Date, datePosition = DatePositionFormat.ddmmyyyy, dateSymbol = DateSymbolFormat.slash) {
        const ipdt: IPropertyTranferDate = {
            newDate: date,
            datePosition: datePosition,
            dateSymbol: dateSymbol,
        }
        // 👇️ 24/10/2021 (mm/dd/yyyy)
        ipdt.newDate = new Date();
        console.log(this.formatDateNow(ipdt));
        //  👇️️ 24/07/2027 (mm/dd/yyyy)
        ipdt.newDate = new Date(2027, 6, 24);
        console.log(this.formatDateNow(ipdt));
        //  👇️️ 24/07/2027 (mm/dd/yyyy)
        ipdt.dateSymbol = DateSymbolFormat.slash;
        console.log(this.formatDateNow(ipdt));
        //  👇️️ 24/07/2027 (mm-dd-yyyy)
        ipdt.dateSymbol = DateSymbolFormat.dash;
        console.log(this.formatDateNow(ipdt));
        //  👇️️ 24/07/2027 (mm_dd_yyyy)
        ipdt.dateSymbol = DateSymbolFormat.undercore;
        console.log(this.formatDateNow(ipdt));
    }
}