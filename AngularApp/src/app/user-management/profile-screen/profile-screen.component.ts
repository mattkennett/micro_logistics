import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth/services/auth.service';
import {MicroLogisticsApiService} from '../../micro-logistics-api.service';
import {tap} from 'rxjs/operators';
import {SiteUser} from '../../data-classes';

@Component({
  selector: 'app-profile-screen',
  templateUrl: './profile-screen.component.html',
  styleUrls: ['./profile-screen.component.css']
})
export class ProfileScreenComponent implements OnInit {
  username = '';
  newPassword = '';
  verifyPassword = '';
  successes = [];
  errors = [];

  constructor(
    private apiService: MicroLogisticsApiService,
  ) {
  }

  ngOnInit(): void {
    this.apiService.getUserProfile().subscribe(
      (data: SiteUser) => {
        // this.username = data.username;
      }
    );
  }

  updatePassword(): void {
    this.successes = [];
    this.errors = [];

    this.apiService.updateUserPassword(this.newPassword).subscribe(
      data => {
        this.successes.push('Password Changed!');
      },
      error => {
        console.log(error);
        // TODO: Examine an error and add it to this.errors
      }
    );
  }

  checkUserInput(): void {
    this.errors = [];

    if (this.newPassword && this.verifyPassword && (this.newPassword !== this.verifyPassword)) {
      this.errors.push('Passwords Do Not Match');
    }
  }

}
