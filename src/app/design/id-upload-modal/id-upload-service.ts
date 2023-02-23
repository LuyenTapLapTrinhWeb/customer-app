import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {HandleError, HttpErrorHandler} from '../../common/http-error-handler.service';
import {Observable} from 'rxjs';
import {ServerResponseItem} from '../../common/ServerResponseItem';
import {catchError} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

const options = {
  headers: new HttpHeaders({
    'Accept': 'application/json'
  }),
  observe: 'response' as const,
  params: null,
  reportProgress: false as const,
  responseType: 'json' as const,
  withCredentials: false as const
};

@Injectable()
export class IdUploadService {
  private handleError: HandleError;
  constructor(private http: HttpClient,
              httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('IdUploadService');
  }

  uploadId(idImageFront: File, idImageBack: File): Observable<{}> {
    const formData: FormData = new FormData();
    formData.append('frontImage', idImageFront, idImageFront.name);
    if (idImageBack != null) {
      formData.append('backImage', idImageBack, idImageBack.name);
    }
    return this.http.post<ServerResponseItem>(environment.UPLOAD_IMAGE_URL, formData, options)
      .pipe(
        catchError(this.handleError('uploadIdImage'))
      );
  }
}
