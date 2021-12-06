import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-img-thumb',
  templateUrl: './img-thumb.component.html',
  styleUrls: ['./img-thumb.component.scss']
})
export class ImgThumbComponent implements OnInit {

  @Input() url: any;
  @Output() onChange = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onclick() {
    this.onChange.emit(this.url);
  }

}
