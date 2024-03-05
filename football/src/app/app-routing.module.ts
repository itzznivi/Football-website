import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamComponent } from './team/team.component';
import { MatchesComponent } from './matches/matches.component';
import { LeagueTableComponent } from './league-table/league-table.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { LoginComponent } from './login/login.component';
import { BookComponent } from './book/book.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path:'navbar', component:NavbarComponent},
  { path: 'teams', component: TeamComponent },
  { path: 'matches', component: MatchesComponent },
  { path: 'table', component: LeagueTableComponent },
  { path: 'news', component: NewsComponent },
  { path: '', redirectTo: '/teams', pathMatch: 'full' },
  { path: 'teams', component: TeamComponent },
  { path: 'teams/:name', component: TeamDetailsComponent },
  {path: 'login', component:LoginComponent},
  {path: 'book', component:BookComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
