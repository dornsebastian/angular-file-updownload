import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {saveFile} from './file-download-helper';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  readonly url = 'http://localhost:8000/download';

  constructor(
    private http: HttpClient,
  ) {
  }

  downloadFile() {
    const filename = 'photo.jpg';

    // Process the file downloaded
    this.http.get(this.url, {responseType: 'blob'}).subscribe(blob => {
      saveFile(blob, filename);
    });
  }
}
