import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {Subject} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MusicService {

   
  // // Observable string sources
  // private missionAnnouncedSource = new Subject<string>();
  
 
  // // Observable string streams
  // missionAnnounced$ = this.missionAnnouncedSource.asObservable();

  // Service message commands
  

  //   this.missionAnnouncedSource.next(mission);
  //   console.log(this.missionAnnounced$,this.missionAnnouncedSource);
  // 

  constructor(private http:HttpClient) { }

  url: string='http://localhost:3004/posts';

  getTrendMusic():any{
    return this.http.get("http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=34c0d1d6c0886560e6fd3c2e0ebc55c2&format=json");
  }

  getMusic(value):any{
    var url=`http://ws.audioscrobbler.com/2.0/?method=track.search&api_key=34c0d1d6c0886560e6fd3c2e0ebc55c2&track=${value}&format=json`;
    return this.http.get(url);
  }

  getFavouriteMusic(){
    return this.http.get('http://localhost:3004/posts');
  }
  setFavouriteMusic(music){
    this.http.post(this.url,{music}).subscribe(console.log);
  }
  remove(id){
    this.http.delete(this.url+"/"+id).subscribe(console.log);
  }
  getDetailsMusic(){
    return this.http.get('http://localhost:3004/details');
  }
  setDetailsMusic(music){
    this.http.post('http://localhost:3004/details',{music}).subscribe(console.log);
  }
  deleteDetails(data){
    this.http.delete('http://localhost:3004/details/'+data).subscribe(console.log);
  }
  setFavouriteMusicTrends(music){
    this.http.post('http://localhost:3004/trends',{music}).subscribe(console.log);
  }
  getFavouriteMusicTrends(){
    return this.http.get('http://localhost:3004/trends');
  }
  removeTrend(id){
  this.http.delete('http://localhost:3004/trends'+"/"+id).subscribe(console.log);
  }
  getDetailsMusicTrend(){
    return this.http.get('http://localhost:3004/trenddetails');
  }
  setDetailsMusicTrend(music){
    this.http.post('http://localhost:3004/trenddetails',{music}).subscribe(console.log);
  }
  deleteDetailsTrend(data){
    this.http.delete('http://localhost:3004/trenddetails/'+data).subscribe(console.log);
  }
 
  getFavDetailsMusicTrend(){
    return this.http.get('http://localhost:3004/trenddetailsfav');
  }
  setFavDetailsMusicTrend(music){
    this.http.post('http://localhost:3004/trenddetailsfav',{music}).subscribe(console.log);
  }
  deleteFavDetailsTrend(data){
    this.http.delete('http://localhost:3004/trenddetailsfav/'+data).subscribe(console.log);
  }
  geFavtDetailsMusic(){
    return this.http.get('http://localhost:3004/detailsfav');
  }
  setFavDetailsMusic(music){
    this.http.post('http://localhost:3004/detailsfav',{music}).subscribe(console.log);
  }
  deleteFavDetails(data){
    this.http.delete('http://localhost:3004/detailsfav/'+data).subscribe(console.log);
  }


  
}


