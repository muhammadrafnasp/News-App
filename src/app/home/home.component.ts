import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  generalNews: any = []; //array of data //

  searchTerm: string = '';

  constructor(private ds: DataService) { }

  ngOnInit(): void {
    this.ds.getGeneralNews().subscribe(
      (data: any) => {
        this.generalNews = data.general;
      }
    )

    this.ds.searchKey.subscribe(
      (data: any) => {

        this.searchTerm = data

      }
    )
  }

  addtobookmarks(general:any){
    this.ds.addtobookmarks(general).subscribe(
      (result:any)=>{
        alert(result.message) //true
      },
      (result:any)=>{
        alert(result.error.message) //false
      }
    )

  }

}
