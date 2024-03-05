import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'; 
import {BookComponent} from '../book/book.component';
export interface Team {
  name: string;
  stadium: string;
  image: string;
  showDetails: boolean; 
  members: string[];  
  matchesWon: number;  
  matchesLost: number;  
  upcomingMatches: { date: string; opponent: string }[];  

 }
export interface Match {
  id: number;
  date: string;
  opponent: string;
  teams: string[];
  timing: string;
  venue: string;
  ticketPrice: number;
  availableTickets: number;
}

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent  {
  match: Match[]=[
    
  ]
  
  teams: Team[] = [
    { name: 'Manchester United', stadium: 'Old Trafford', image: 'https://th.bing.com/th/id/OIP.v_JD9Gns5ndJ-czI40z3YwHaEK?w=275&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7',showDetails: false, members: ['Player 1', 'Player 2'], matchesWon: 5, matchesLost: 3,  upcomingMatches: [
      { date: '2024-02-25', opponent: 'Real Madrid' }, 
      { date: '2024-03-03', opponent: 'Barcelona' }
    ] },
    { name: 'Real Madrid', stadium: 'Santiago Bernabéu Stadium', image: 'https://th.bing.com/th/id/OIP.AxaBba9SCJnteGizr3RPxgHaEo?w=252&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7',showDetails: false, members: ['Player 1', 'Player 2'], matchesWon: 5, matchesLost: 3,  upcomingMatches: [
      { date: '2024-02-25', opponent: 'Opponent 1' }, 
      { date: '2024-03-03', opponent: ' Barcelona' }
    ] },
    { name: 'Barcelona', stadium: 'Santiago Bernabéu Stadium', image: 'https://th.bing.com/th/id/OIP.a0x0C66_9dQvU2yNfMislwHaEK?rs=1&pid=ImgDetMain',showDetails: false, members: ['Player 1', 'Player 2'], matchesWon: 5, matchesLost: 3, upcomingMatches: [
      { date: '2024-02-25', opponent: ' Real Madrid' }, 
      { date: '2024-03-03', opponent: 'Liverpool' }
    ]},
    { name: 'Liverpool', stadium: 'Santiago Bernabéu Stadium', image: 'https://th.bing.com/th?id=OIF.SmmUj3wg6DlEB2LjCO%2buaw&rs=1&pid=ImgDetMain',showDetails: false, members: ['Player 1', 'Player 2'], matchesWon: 5, matchesLost: 3,  upcomingMatches: [
      { date: '2024-02-25', opponent: ' Real Madrid' }, 
      { date: '2024-03-03', opponent: ' Barcelona' }
    ]},
    { name: 'Bayern munich', stadium: 'Santiago Bernabéu Stadium', image: 'https://cdn.wallpapersafari.com/99/49/U5cgso.jpg',showDetails: false, members: ['Player 1', 'Player 2'], matchesWon: 5, matchesLost: 3, upcomingMatches: [
      { date: '2024-02-25', opponent: ' Real Madrid' }, 
      { date: '2024-03-03', opponent: ' Barcelona' }
    ] },
    { name: 'Paris-saint germain ', stadium: 'Santiago Bernabéu Stadium', image: 'https://logodetimes.com/times/psg/logo-psg-4096.png',showDetails: false, members: ['Player 1', 'Player 2'], matchesWon: 5, matchesLost: 3, upcomingMatches: [
      { date: '2024-02-25', opponent: ' Real Madrid' }, 
      { date: '2024-03-03', opponent: ' Barcelona' }
    ]  },
    { name: 'Chelsea', stadium: 'Santiago Bernabéu Stadium', image: 'https://logodownload.org/wp-content/uploads/2017/02/chelsea-fc-logo-escudo.png' ,showDetails: false, members: ['Player 1', 'Player 2'], matchesWon: 5, matchesLost: 3,upcomingMatches: [
      { date: '2024-02-25', opponent: ' real madrid' }, 
      { date: '2024-03-03', opponent: ' Barcelona' }
    ]  },
    { name: 'AC Milan', stadium: 'Santiago Bernabéu Stadium', image: 'https://th.bing.com/th/id/OIP.jFeupi1DHKU0AGQbs_ElOAHaEo?rs=1&pid=ImgDetMain',showDetails: false, members: ['Player 1', 'Player 2'], matchesWon: 5, matchesLost: 3,  upcomingMatches: [
      { date: '2024-02-25', opponent: ' Real Madrid' }, 
      { date: '2024-03-03', opponent: ' Barcelona' }
    ]},

   ];
   constructor(private dialog: MatDialog) {}
   openBookingDialog(match: { date: string; opponent: string }): void {
     const dialogRef = this.dialog.open(BookComponent, {
      width: '500px', height:'180px',
      data: { match: match }
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        alert('Booking successful!');
      } else {
        console.log('Booking failed or was cancelled.');
      }
     });
  }   
}
