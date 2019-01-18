import {Injectable} from '@angular/core';
import {HttpClient, HttpEventType, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  readonly url = 'http://localhost:8000/upload';

  constructor(private http: HttpClient) {
  }

  public upload(file: File): Observable<number> {

    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    const req = new HttpRequest('POST', this.url, formData, {
      reportProgress: true
    });

    return this.http.request(req).pipe(map(event => {
      if (event.type === HttpEventType.UploadProgress) {
        return Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        return 100;
      }
    }));
  }
}
