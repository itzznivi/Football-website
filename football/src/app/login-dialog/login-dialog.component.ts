import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent {
  constructor(private router: Router, private dialogRef: MatDialogRef<LoginDialogComponent>) { }

  username: string='';
  password: string='';
  invalidLogin: boolean = false;

  login() {
    if (this.username === 'user' && this.password === 'user') {
      console.log('Login successful');
      this.router.navigateByUrl('/home');
      this.dialogRef.close();
    } else {
      console.log('Invalid username or password');
      this.invalidLogin = true;
    }
  }
}
