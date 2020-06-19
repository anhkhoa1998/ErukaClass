import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css']
})
export class SignInFormComponent implements OnInit {
  @Input() name: string;
  asdss: string;
  @Output() saveName = new EventEmitter();
  ten_1:string;
  @Output() ten_2=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  saveasd(){
    this.asdss = 'agk';
    this.saveName.emit(this.asdss);
  }
  save()
  {
    this.ten_1="Liem HN";
    this.ten_2.emit(this.ten_1)
  }
}
