import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
declare var $: any;

@Injectable({
  providedIn: 'root'
})

export class AlertService {

  constructor(private router: Router, private matDialog: MatDialog) { }

  // tslint:disable-next-line:typedef
  errorHandle(optional: any) {
    if (optional.Error != null) {
      switch (optional.Error.Message) {
        case 'token is invalid':
          localStorage.removeItem('token');
          this.matDialog.closeAll();
          this.router.navigate(['/dang-nhap'], { queryParams: { error: 'TokenInValid' } });
          break;
        case 'token is expried':
          localStorage.setItem('token', optional.Data);
          break;
        default:
          this.showNotification('top', 'right', optional.Error.Message, 4);
          break;

      }
    } else if (optional.message != null) {
      if (optional.message.includes('Http failure response for')) {
        this.showNotification('top', 'right', optional.message.replace('Http failure response for', 'Không thể kết nối đến').replace('0 Unknown Error', 'Vui lòng thử lại.'), 4);
      } else {
        this.showNotification('top', 'right', optional.message, 4);
      }

    }

    return;
  }
  // tslint:disable-next-line:typedef
  successHandle(dataOrError: any, message: string) {
    if (dataOrError.Success) {
      this.showNotification('top', 'right', message, 2);
    }
    return;
  }
  // tslint:disable-next-line:typedef
  successHandleMess(message: string) {
    this.showNotification('top', 'right', message, 2);
    return;
  }
  // tslint:disable-next-line:typedef
  errorHandleMess(message: string) {
    this.showNotification('top', 'right', message, 4);
    return;
  }

  // tslint:disable-next-line:typedef
  showNotification(from: string, align: string, message: string, typeItem: number) {
    const type = ['', 'info', 'success', 'warning', 'danger'];
    $.notify({
      icon: 'notifications',
      message

    }, {
      type: type[typeItem],
      timer: 500,
      placement: {
        from,
        align
      },
      offset: {
        x: 10,
        y: 80
      },
      template: '<div data-notify="container" class="col-xs-4 col-sm-4 alert alert-{0} alert-with-icon" role="alert">' +
        '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons" style="position: absolute; top:10px">close</i></button>' +
        '<i class="material-icons" data-notify="icon">notifications</i> ' +
        '<span data-notify="title">{1}</span> ' +
        '<span data-notify="message">{2}</span>' +
        '<div class="progress" data-notify="progressbar">' +
        '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
        '</div>' +
        '<a href="{3}" target="{4}" data-notify="url"></a>' +
        '</div>'
    });
  }
}
