import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/common/home/home.component';
import { VideoComponent } from './components/common/video/video.component';
import { AudioComponent } from './components/common/audio/audio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatModule } from './mat/mat.module';
import { FolderComponent } from './components/common/folder/folder.component';
import { FileComponent } from './components/common/file/file.component';
import { FolderDetailsComponent } from './components/common/folder-details/folder-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VideoComponent,
    AudioComponent,
    FolderComponent,
    FileComponent,
    FolderDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
