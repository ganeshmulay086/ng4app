import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from './http-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Team List';
  test:number = 0;
  name:any;
  constructor( private myservice:HttpServiceService ){}

  ngOnInit(){
    this.myservice.getData().subscribe(
      data => this.name = data.json()
    );
  }
}
