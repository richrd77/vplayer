import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { VideoComponent } from '../video/video.component';

@Component({
  selector: 'vp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog, private router: Router) { }

  paths = ['Music', 'Videos', 'Common', 'new Folder', 'new Songs', 'first', 'scond', 'third', 'fourth','fifith','sixth','Music', 'Videos', 'Common', 'new Folder', 'new Songs', 'first', 'scond', 'third', 'fourth','fifith','sixth','Music', 'Videos', 'Common', 'new Folder', 'new Songs', 'first', 'scond', 'third', 'fourth','fifith','sixth','Music', 'Videos', 'Common', 'new Folder', 'new Songs', 'first', 'scond', 'third', 'fourth','fifith','sixth'];

  ngOnInit(): void {
  }

  Open(): void {
    const dialogRef = this.dialog.open(VideoComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  foldrclick(folderName:string) : void {
    //alert(folderName);
    this.router.navigate(['details',folderName]);
  }

}
