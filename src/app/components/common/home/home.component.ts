import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HomeFolder } from 'src/app/models/home/home-folder';
import { FileService } from 'src/app/services/file.service';
import { VideoComponent } from '../video/video.component';

@Component({
  selector: 'vp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog, private router: Router,
    private fs: FileService) { }

  paths: HomeFolder[] = [];

  ngOnInit(): void {
    // debugger;
    this.fs.GetDirectories().then(f => this.paths = f);
  }

  Open(): void {
    const dialogRef = this.dialog.open(VideoComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  foldrclick(folderName: string): void {
    //alert(folderName);
    this.router.navigate(['details', folderName]);
  }

}
