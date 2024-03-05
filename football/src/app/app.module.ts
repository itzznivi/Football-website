import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TeamComponent } from './team/team.component';
import { MatchesComponent } from './matches/matches.component';
import { LeagueTableComponent } from './league-table/league-table.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { LoginComponent } from './login/login.component';
import { BookComponent } from './book/book.component';
import { FormsModule } from '@angular/forms'; 
import {MatDialogModule} from '@angular/material/dialog';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
     TeamComponent,
    MatchesComponent,
    LeagueTableComponent,
    NewsComponent,
    HomeComponent,
    TeamDetailsComponent,
 LoginComponent, BookComponent, LoginDialogComponent
     
     
  ],
  imports: [
    BrowserModule,RouterModule,
    AppRoutingModule,
    MatTableModule,MatInputModule,MatPaginatorModule,MatExpansionModule ,
    MatDialogModule, FormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
