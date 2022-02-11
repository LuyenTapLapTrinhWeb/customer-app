import { AbstractControl, FormArray, FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MethodService {

  constructor() {
  }
  cloneObject(obj: any): any {
    return JSON.parse(JSON.stringify(obj));
  };
  getMessengerErrorValidate(validator: ValidationErrors): string{
    if(validator){
      if (validator.valid_date){
        return 'Định dạng ngày tháng năm không hợp lệ';
      }else if (validator.datetime){
        return 'Định dạng ngày tháng năm không hợp lệ';
      }else if (validator.matDatepickerParse) {
        return 'Định dạng ngày tháng năm không hợp lệ';
      }else if (validator.required) {
        return 'Không được phép để trống';
      }else if (validator.email) {
        return 'Định dạng email không hợp lệ';
      }else if (validator.min) {
        return 'Giá trị dưới mức giới hạn';
      }else if (validator.max) {
        return 'Giá trị trên mức giới hạn';
      }else if (validator.maxlength) {
        return 'Vựơt quá độ dài quy định';
      } else if (validator.minlength) {
        return 'Chưa đủ số ký tự bắt buộc';
      }else if (validator.landline) {
        return 'Định dạng số điện thoại cố định không hợp lệ';
      }else if (validator.mobilePhone) {
        return 'Định dạng số điện thoại di động không hợp lệ';
      }else if (validator.identityCard) {
        return 'Định dạng CMT/CCCD không hợp lệ';
      }else if (validator.healthInsuranceCard) {
        return 'Định dạng BHYT không hợp lệ';
      }else if (validator.matDatepickerMin){
        return 'Ngày tháng năm dưới mức giới hạn';
      }else if (validator.matDatepickerMax){
        return 'Ngày tháng năm trên mức giới hạn';
      }
    }
    return '';
  }

}
export class MultiSearch {
  formName!: FormControl;
  label!: string;
}
