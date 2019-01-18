import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {UploadComponent} from './upload/upload.component';
import { DownloadComponent } from './download/download.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    DownloadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
