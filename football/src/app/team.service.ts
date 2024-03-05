import { Injectable } from '@angular/core';
import { Team } from './team.model'; // Import the Team interface

 

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private teams: Team[] = [   
    { name: 'Manchester United', stadium: 'Old Trafford', image: 'https://example.com/manchester-united-logo.png' },
    { name: 'Real Madrid', stadium: 'Santiago Bernabéu', image: 'https://example.com/real-madrid-logo.png' },
   ];

  constructor() { }

  getTeamByName(name: string): Team | undefined {
    console.log('Retrieved team:',this.teams);

    return this.teams.find(team => team.name === name);
  }
  getTeamDetails(teamId: string): Team | undefined {
     return this.teams.find(team => team.name === teamId);
  }

}
