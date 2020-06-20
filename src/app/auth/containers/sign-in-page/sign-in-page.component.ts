import { Component, OnInit } from '@angular/core';
import { SignIn } from '../../models/auth.model';
import { Store } from '@ngrx/store';
import { AuthState } from '../../reducer/auth.reducer';
import { AuthAction } from '../../action';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})
export class SignInPageComponent implements OnInit {
  constructor(private store: Store<AuthState>) { }

  ngOnInit(): void {
  }
  signIn(value: SignIn) {
    this.store.dispatch(AuthAction.signIn({ signin: value}));
  }
}
