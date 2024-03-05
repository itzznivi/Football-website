import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parent-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private dialog: MatDialog, private router: Router) {}

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'success') {
        // Navigate to the home page upon successful login
        this.router.navigateByUrl('/home');
      }
    });
  }
}
