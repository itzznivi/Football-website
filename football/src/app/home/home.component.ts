import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import{LoginDialogComponent} from '../login-dialog/login-dialog.component'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private dialog: MatDialog) { }

  // Method to open the login dialog
  openLoginDialog(): void {
    this.dialog.open(LoginDialogComponent, {
      width: '400px'
    });
  }

}
