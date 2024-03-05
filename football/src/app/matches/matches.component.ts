import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';



export interface Match {
  teamName: string;
  opponent: string;
  date: string;
  stadium: string;
}

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrl: './matches.component.css'
})
export class MatchesComponent implements OnInit {
  dataSource: MatTableDataSource<Match>;
  displayedColumns: string[] = ['teamName', 'opponent', 'date', 'stadium'];
  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;


  constructor() {
    const matches: Match[] = [
      { teamName: ' Manchester United', opponent: ' Bayern munich', date: '2024-02-21', stadium: ' Santiago Bernabéu Stadium' },
      { teamName: ' Bayern munich', opponent: 'Team D', date: '2024-02-22', stadium: ' Santiago Bernabéu Stadium' },
      { teamName: 'Team A', opponent: ' Manchester United', date: '2024-02-21', stadium: ' Santiago Bernabéu Stadium' },
      { teamName: ' Manchester United', opponent: ' Bayern munich', date: '2024-02-22', stadium: ' Santiago Bernabéu Stadium' },
      { teamName: 'Team A', opponent: ' Bayern munich', date: '2024-02-21', stadium: ' Santiago Bernabéu Stadium' },
      { teamName: ' Manchester United', opponent: 'Team B', date: '2024-02-21', stadium: ' Santiago Bernabéu Stadium' },
      { teamName: ' Bayern munich', opponent: ' Manchester United', date: '2024-02-21', stadium: ' Santiago Bernabéu Stadium' },

       
     ];
    this.dataSource = new MatTableDataSource<Match>(matches);
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;

  }

}


