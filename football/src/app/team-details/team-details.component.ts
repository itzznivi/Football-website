import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from '../team.service';
import { Subscription } from 'rxjs';
// import { Team } from '../team.model';  
export interface Team {
  name: string;
  stadium: string;
  image: string;
  showDetails: boolean;  
  members: string[];  
  matchesWon: number;   
  matchesLost: number;   
  upcomingMatches: string[];  
}

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {

private routeSub : Subscription | undefined;
name:any;
private isTeamRequired = false;
  constructor(private route: ActivatedRoute, private teamService: TeamService) { }
  teams: Team[] = [
    { name: 'Manchester United', stadium: 'Old Trafford', image: 'https://th.bing.com/th/id/OIP.v_JD9Gns5ndJ-czI40z3YwHaEK?w=275&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7',showDetails: false, members: ['Player 1', 'Player 2'], matchesWon: 5, matchesLost: 3, upcomingMatches: ['Match 1', 'Match 2']  },
    { name: 'Real Madrid', stadium: 'Santiago Bernabéu Stadium', image: 'https://th.bing.com/th/id/OIP.AxaBba9SCJnteGizr3RPxgHaEo?w=252&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7',showDetails: false, members: ['Player 1', 'Player 2'], matchesWon: 5, matchesLost: 3, upcomingMatches: ['Match 1', 'Match 2'] },
    { name: 'Barcelona', stadium: 'Santiago Bernabéu Stadium', image: 'https://th.bing.com/th/id/OIP.a0x0C66_9dQvU2yNfMislwHaEK?rs=1&pid=ImgDetMain',showDetails: false, members: ['Player 1', 'Player 2'], matchesWon: 5, matchesLost: 3, upcomingMatches: ['Match 1', 'Match 2'] },
    { name: 'Liverpool', stadium: 'Santiago Bernabéu Stadium', image: 'https://th.bing.com/th?id=OIF.SmmUj3wg6DlEB2LjCO%2buaw&rs=1&pid=ImgDetMain',showDetails: false, members: ['Player 1', 'Player 2'], matchesWon: 5, matchesLost: 3, upcomingMatches: ['Match 1', 'Match 2'] },
    { name: 'Bayern munich', stadium: 'Santiago Bernabéu Stadium', image: 'https://cdn.wallpapersafari.com/99/49/U5cgso.jpg',showDetails: false, members: ['Player 1', 'Player 2'], matchesWon: 5, matchesLost: 3, upcomingMatches: ['Match 1', 'Match 2'] },
    { name: 'Paris-saint germain ', stadium: 'Santiago Bernabéu Stadium', image: 'https://logodetimes.com/times/psg/logo-psg-4096.png',showDetails: false, members: ['Player 1', 'Player 2'], matchesWon: 5, matchesLost: 3, upcomingMatches: ['Match 1', 'Match 2'] },
    { name: 'Chelsea', stadium: 'Santiago Bernabéu Stadium', image: 'https://logodownload.org/wp-content/uploads/2017/02/chelsea-fc-logo-escudo.png' ,showDetails: false, members: ['Player 1', 'Player 2'], matchesWon: 5, matchesLost: 3, upcomingMatches: ['Match 1', 'Match 2']},
    { name: 'AC Milan', stadium: 'Santiago Bernabéu Stadium', image: 'https://www.designfootball.com/images/joomgallery/originals/football_crests_8/ac_milan_logo_20200303_1396988214.png',showDetails: false, members: ['Player 1', 'Player 2'], matchesWon: 5, matchesLost: 3, upcomingMatches: ['Match 1', 'Match 2'] },
   ];
  
 ngOnInit(): void {
  this.routeSub = this.route.params.subscribe(params => {
    this.name = params['name']; 
    
  });
}

}
