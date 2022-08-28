import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'vp-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {

  @Input() fullPath : string;
  constructor() {
    this.fullPath="";
  }

  get fileName(): string{
    let split = this.fullPath.split("\\");
    return split[split.length-1];
  }
  ngOnInit(): void {
  }

}
