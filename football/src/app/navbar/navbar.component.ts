 import { Component } from '@angular/core';
 import { MatDialog } from '@angular/material/dialog';
 import { LoginDialogComponent } from '../login-dialog/login-dialog.component'; // Adjust the path as per your project structure

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  // Inject MatDialog in the constructor
  constructor(private dialog: MatDialog) { }

  // Method to open the login dialog
  openLoginDialog(): void {
    this.dialog.open(LoginDialogComponent, {
      width: '400px'
    });
  }
}
