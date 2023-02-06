import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

 techNews:any=[];
 searchTerm:string = '';
 
  constructor(private ds:DataService) { }

  ngOnInit(): void {
    this.ds.getTechnologyNews().subscribe(
     (data:any)=>{
      this.techNews = data.teche
     }
    )

    this.ds.searchKey.subscribe(
      (data:any)=>{
        this.searchTerm = data
      }
    )
  }

  addtobookmarks(tech:any){
    this.ds.addtobookmarks(tech).subscribe(
      (result:any)=>{
        alert(result.message)
      },
      (result:any)=>{
        alert(result.error.message)
      }
    )
  }

}
