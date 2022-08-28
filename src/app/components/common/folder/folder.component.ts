import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'vp-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})
export class FolderComponent implements OnInit {

  @Input() folderName: string;

  constructor() {
    this.folderName = '';
  }

  ngOnInit(): void {
  }

}
