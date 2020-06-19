import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})
export class SignInPageComponent implements OnInit {
  ten: string;
  bien_1:string;
  bien_2 ='Huynh Ngoc Liem';
  constructor() { }

  ngOnInit(): void {
  }
  getName(value: string){
    this.ten = value;
  }
  layten(value:string)
  {
    this.bien_1=value;
  }
}
