import {Observable} from 'rxjs';

export class UploadFileEntity {
  constructor(public file: File, public status: Observable<number>) {

  }
}
