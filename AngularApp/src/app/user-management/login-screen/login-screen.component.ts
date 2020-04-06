import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {AuthService} from '../auth/services/auth.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {
  inputUsername: string;
  inputPassword: string;
  errors: boolean;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.inputUsername = '';
    this.inputPassword = '';
  }

  logInClickHandler(): void {
    // Clear out old errors if necessary
    this.errors = false;
    this.authService.login({username: this.inputUsername, password: this.inputPassword}).subscribe(
      () => {
        // This is the success function, so that means we should redirect to /home
        this.router.navigate(['/home']);
      }, () => {
        // This is the error function and means that the authentication failed
        // TODO: Treat invalid credentials differently from a network problem
        this.errors = true;
      }
    );
  }
}
