import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
  
  sportsNews:any=[]; //array of data //
  searchTerm:string='';

  constructor(private ds:DataService) { }

  ngOnInit(): void {
    this.ds.getSportsNews().subscribe(
      (data:any)=>{
        this.sportsNews = data.sports;
      }
    )

    this.ds.searchKey.subscribe(
      (data:any)=>{
        this.searchTerm = data
      }
    )

  }

  addtobookmarks(sport:any){
    this.ds.addtobookmarks(sport).subscribe(
      (result:any)=>{
        alert(result.message)
      },
      (result:any)=>{
        alert(result.error.message)
      }
    )
  }

}
