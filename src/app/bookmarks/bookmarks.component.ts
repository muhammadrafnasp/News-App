import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {
  bookmarks:any=[];
  eMsg:any
  constructor(private ds:DataService, private router:Router) { }

  ngOnInit(): void {
    this.ds.getBookmarks().subscribe(
      (data:any)=>{
        this.bookmarks = data.bookmarks
        if(this.bookmarks.length==0){
          this.eMsg='Empty wishlist'
        }
      },
      (data:any)=>{//client error
        this.eMsg= data.error.message
      }
    )
  }

  deleteBookmarks(general:any){
    this.ds.deleteBookmarks(general.author)
    .subscribe(
      (result:any)=>{
       alert(result.message) 
      //  this.router.navigateByUrl('bookmark')
       this.bookmarks = result.bookmarks
      //  if(this.bookmarks.length==0){
      //   this.eMsg="Empty wishlist"
      //  }
      window.location.reload() //automatic refresh


      }
    )
  }

}
