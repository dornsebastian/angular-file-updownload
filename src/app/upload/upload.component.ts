import {Component, OnInit, ViewChild} from '@angular/core';
import {UploadService} from './upload.service';
import {UploadFileEntity} from './upload-file.entity';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  @ViewChild('file') file;
  public files: UploadFileEntity[] = [];

  constructor(private uploadService: UploadService) {
  }

  ngOnInit() {
  }

  onFilesAdded() {
    const files: { [key: string]: File } = this.file.nativeElement.files;
    for (const key in files) {
      if (!isNaN(Number(key))) {
        const file = files[key];
        const status = this.uploadService.upload(file);
        this.files.unshift(new UploadFileEntity(file, status));
      }
    }
  }

  addFiles() {
    this.file.nativeElement.click();
  }

}
