import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'examples';
  myName = 'Robert'
  today: number = Date.now();

  contacts = [
    { name: 'Joe', phone: 1234234 },
    { name: 'Mike', phone: 81234234 },
    { name: 'Bob', phone: 41234234 },
    { name: 'Jack', phone: 34234 },
    { name: 'Carlos', phone: 234234 }
  ];
  images = [
    'https://api.debugger.pl/assets/tomato.jpg',
    'https://api.debugger.pl/assets/pumpkin.jpg',
    'https://api.debugger.pl/assets/potatoes.jpg'
  ];
  access: boolean = true;
  currentPhone: any;
  currentImg: any;

  changeAccess(ev: any) {
    this.access = ev; //.target.checked;
  }

  phoneChange(phone: any) {
    this.currentPhone = phone;
  }

  imgChange(img:any){
    this.currentImg = img;
  }

}
