import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getTeams(): Observable<string[]> {
     return of(['Team 1', 'Team 2', 'Team 3']);
  }

  getMatches(): Observable<string[]> {
     return of(['Match 1', 'Match 2', 'Match 3']);
  }
}
