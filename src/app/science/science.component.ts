import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {
  
scienceNews:any=[];
searchTerm:string = '';

  constructor(private ds:DataService) { }

  ngOnInit(): void {
    this.ds.getScienceNews().subscribe(
      (data:any)=>{
        this.scienceNews = data.science;
      }
    )
    this.ds.searchKey.subscribe(
      (data:any)=>{
        this.searchTerm = data
      }
    )
  }

  addtobookmarks(science:any){
    this.ds.addtobookmarks(science).subscribe(
      (result:any)=>{
        alert(result.message)
      },
      (result:any)=>{
        alert(result.error.message)
      }
    )
  }

}
