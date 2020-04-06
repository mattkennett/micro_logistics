import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../user-management/auth/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.css']
})
export class NavTopComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
  }

  userLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

}
