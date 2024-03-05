import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  numTickets: number = 0; 
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  
  bookTickets(): void {
    if (this.numTickets >= 1) {
      alert('Booking successful!');
    } else {
      alert('Your ticket count should be at least 1.');
    }     

   }
}
