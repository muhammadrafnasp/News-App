import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {

  entertainmentNews: any = [];

  searchTerm: string = '';

  constructor(private ds: DataService) { }

  ngOnInit(): void {
    this.ds.getEntertainment().subscribe(
      (data: any) => {
        this.entertainmentNews = data.entertainment;
      }
    )

    this.ds.searchKey.subscribe(
      (data: any) => {
        this.searchTerm = data
      }
    )

  }

  addtobookmarks(entertainment:any){
    this.ds.addtobookmarks(entertainment).subscribe(
       (result:any)=>{
        alert(result.message)
       },
       (result:any)=>{
        alert(result.error.message)
       }
    )
  }

}
