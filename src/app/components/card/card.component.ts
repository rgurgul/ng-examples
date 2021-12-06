import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  /* encapsulation: ViewEncapsulation.ShadowDom */
})
export class CardComponent implements OnInit {

  @Input() data: any;
  @Output() onChange = new EventEmitter()

  constructor() { }

  onClick() {
    this.onChange.emit(this.data.phone);
  }

  ngOnInit(): void {
  }

}

