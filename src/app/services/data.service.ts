import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }


  

  register(name:any,email:any,password:any){

    const data = {
      name,
      email,
      password
    }

    return this.http.post('http://localhost:3000/register',data);

  }


  login(email:any,password:any){
    const data = {
      email,
      password
    }
    return this.http.post('http://localhost:3000/login',data)
  }


  getGeneralNews(){
    return this.http.get('http://localhost:3000/general-news')
    //json data
  }

  getTechnologyNews(){
    return this.http.get('http://localhost:3000/technology-news')
  }

  getgetEntrepreneurNews(){
    return this.http.get('http://localhost:3000/business-news')
  }

  getSportsNews(){
    return this.http.get('http://localhost:3000/sports-news')
  }

  getHealthNews(){
    return this.http.get('http://localhost:3000/health-news')
  }

  getScienceNews(){
    return this.http.get('http://localhost:3000/science-news')
  }

  getEntertainment(){
    return this.http.get('http://localhost:3000/entertainment-news')
  }

  searchKey= new BehaviorSubject('')

  // add to bookmark
  addtobookmarks(general:any){
    console.log(general.category);
    
    const body={
      
      id:general.id,
      author:general.author,
      title:general.title,
      description:general.description,
      url:general.url,
      urlToImage:general.urlToImage,
      publishedAt:general.publishedAt,
      category:general.category
  
    }
    return this.http.post('http://localhost:3000/bookmarks',body)
  }

  getBookmarks(){
    return this.http.get('http://localhost:3000/getbookmarks')
    //json data
  }

  //delete from bookmarks
  deleteBookmarks(author:any){
    return this.http.delete('http://localhost:3000/deleteBookmarks'+ author)
  }

}
