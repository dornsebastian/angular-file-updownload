import {Component, OnInit} from '@angular/core';
import {DownloadService} from './download.service';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  constructor(private downloadService: DownloadService) {
  }

  ngOnInit() {
  }


  download() {
    this.downloadService.downloadFile();
  }
}
