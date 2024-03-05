import { Component, OnInit } from '@angular/core';
export interface Team {
  position: number;
  name: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  points: number;
}

@Component({
  selector: 'app-league-table',
  templateUrl: './league-table.component.html',
  styleUrls: ['./league-table.component.css']
})
export class LeagueTableComponent implements OnInit {
  teams: Team[] = [
    { position: 1, name: 'Liverpool', played: 10, won: 7, drawn: 2, lost: 1, points: 23 },
    { position: 2, name: 'Barcelona', played: 10, won: 6, drawn: 3, lost: 1, points: 21 },
    { position: 3, name: 'Manchester United', played: 10, won: 5, drawn: 3, lost: 1, points: 20 },
    { position: 4, name: 'Real Madrid', played: 10, won: 5, drawn: 3, lost: 4, points: 18 },
    { position: 5, name: 'Juventus', played: 10, won: 4, drawn: 3, lost: 3, points: 17 },
    { position: 6, name: 'Chelsea', played: 10, won: 3, drawn: 3, lost: 2, points: 16 },
    { position: 7, name: 'Manchester city', played: 10, won:3, drawn: 3, lost: 3, points: 15 },
    { position: 8, name: 'AC Milan', played: 10, won: 2, drawn: 3, lost: 4, points: 12 },

   ];

  constructor() { }

  ngOnInit(): void {
  }
}
