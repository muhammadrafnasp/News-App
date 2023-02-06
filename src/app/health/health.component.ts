import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

healthNews:any=[];
searchTerm:string = '';
  constructor(private ds:DataService) { }

  ngOnInit(): void {
    this.ds.getHealthNews().subscribe(
      (data:any)=>{
        this.healthNews = data.health;
      }
    )
    this.ds.searchKey.subscribe(
      (data:any)=>{
        this. searchTerm = data
      }
    )
  }

  addtobookmarks(health:any){
    this.ds.addtobookmarks(health).subscribe(
      (result:any)=>{
        alert(result.message) //true
      },
      (result:any)=>{
        alert(result.error.message) //false
      }
    )
  }

}
