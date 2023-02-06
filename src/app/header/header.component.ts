import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user = '';

  constructor(private router: Router, private ds: DataService) {

  }

  //current date
  sdate: any;

  generalNews: any = []; //array of data //
  title1: any = [];
  title2: any = [];

  ngOnInit(): void {
    if (localStorage.getItem('currentUser')) {
      this.user = JSON.parse(localStorage.getItem('currentUser') || '');
    }
    this.sdate = new Date();


    //to get title in scroll bar
    this.ds.getGeneralNews().subscribe(
      (data: any) => {
        this.generalNews = data.general;
        for (let i of this.generalNews) {
          this.title1.push(i.title)

        }

        this.title2 = this.title1.toString()
        console.log(this.title2, "j");
        console.log(this.generalNews);

      }
    )


  }

  logout() {
    //Remove currentUser and currentEmail from localstorage
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentEmail');
    localStorage.removeItem('token');
    this.router.navigateByUrl('');
  }

  search(event: any) {
    let searchKey = event.target.value
    this.ds.searchKey.next(searchKey)
  }


}
