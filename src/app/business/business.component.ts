import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  businessNews: any = []; //array of data

  serchTerm: string = '';

  constructor(private ds: DataService) { }

  ngOnInit(): void {

    this.ds.getgetEntrepreneurNews().subscribe(
      (data: any) => {
        this.businessNews = data.business;
      }
    )

    this.ds.searchKey.subscribe(
      (data: any) => {
        this.serchTerm = data
      }
    )

  }

  addtobookmarks(busi: any) {
    this.ds.addtobookmarks(busi).subscribe(
      (result: any) => {
        alert(result.message)
      },
      (result: any) => {
        alert(result.error.message)
      }
    )
  }


}
