import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  title = 'Team List';
  teamMember:string[];
  newMember:string;
  ngOnInit(){
    this.teamMember = ["Sachin Tendulkar","Virendra Sehwag","Saurav Ganguly","Rahul Dravid","VVS Luxman"]; 
  }

  addTeamMember(){
    this.teamMember.push( this.newMember );
    this.newMember = '';
  }

}
