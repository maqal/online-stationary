import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { API_CONFIG } from '../constants/api_constant';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router) {}

  login() {
    const loginData = {
      email: this.email,
      password: this.password
    };

    this.userService.userLogin(loginData).subscribe({
      next: (response: any) => {
        if (response && response.userId) {
          console.log('Login successful!', response);
          // Navigate to dashboard or another page after successful login
          this.router.navigate(['/dashboard']);
        }
      },
      error: (err) => {
        console.error('Login failed:', err);
        // Handle login error (e.g., show an error message)
      }
    });
  }

}
