import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { PlayerComponent } from './player/player.component';
import { TeamComponent } from './team/team.component';
import { HttpModule } from '@angular/http';
const appRoutes: Routes = [
  { path: 'player', component: PlayerComponent },
  { path: 'team', component: TeamComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
