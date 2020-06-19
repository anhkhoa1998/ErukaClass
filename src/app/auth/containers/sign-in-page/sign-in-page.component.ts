import { Component, OnInit } from '@angular/core';
import { SignIn } from '../../models/auth.model';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})
export class SignInPageComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  signIn(value: SignIn) {
    console.log(value);
  }
}
