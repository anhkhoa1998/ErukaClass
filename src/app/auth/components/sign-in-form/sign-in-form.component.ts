import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignIn } from '../../models/auth.model';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css']
})
export class SignInFormComponent implements OnInit {
  @Output() saveSignInInfor = new EventEmitter();
  signInInfor: SignIn = {
    username: '',
    password: '',
  };
  hide = true;
  rfUser: FormGroup;

  constructor(private fb: FormBuilder) {
    this.rfUser = this.fb.group({
      username: this.fb.control('', [Validators.required, Validators.minLength(6)]),
      password: this.fb.control('', [Validators.required, Validators.minLength(6)])
    });
  }

  ngOnInit(): void {
  }

  submit() {
    this.signInInfor.username = this.rfUser.get('username').value;
    this.signInInfor.password = this.rfUser.get('password').value;
    this.saveSignInInfor.emit(this.signInInfor);
  }
}
