import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'vp-folder-details',
  templateUrl: './folder-details.component.html',
  styleUrls: ['./folder-details.component.scss']
})
export class FolderDetailsComponent implements OnInit {
  current: string;
  files: string[] = [
    'C:\\Users\\RICHARD\\source\\vplayer\\android\\app\\build\\outputs\\apk\\debug.mp3',
    'C:\\Users\\RICHARD\\source\\vplayer\\android\\app\\build\\outputs\\apk\\Test.mp3',
    'C:\\Users\\RICHARD\\source\\vplayer\\android\\app\\build\\outputs\\apk\\debug1.mp3',
    'C:\\Users\\RICHARD\\source\\vplayer\\android\\app\\build\\outputs\\apk\\debug2.mp3',
  ];

  constructor(private activeRoute: ActivatedRoute, private fs: FileService) {
    this.current = '';
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((e) => {
      console.log(e.folder);
      this.current = e.folder;
      this.fs.ExtractFiles(e.folder).subscribe(s => {
        console.log('det - comp', s);
      });
    });
  }

}
