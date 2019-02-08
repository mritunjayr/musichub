import { Component, OnInit } from '@angular/core';
import {MusicService} from '../music.service';
import{Router } from '@angular/router';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  musiclist:any=[];
  musiclistrend:any=[];
  constructor(private musicService:MusicService,
    private router :Router) { }
  ngOnInit() {
  
    this.musicService.getFavouriteMusic().subscribe(data=>{
      this.musiclist=data;});
      this.musicService.getFavouriteMusicTrends().subscribe(data=>{
        this.musiclistrend=data;});
}
  
        
        // console.log("fav gotten data :",data);
  remove(id){
      this.musicService.remove(id);
      this.musiclist=this.musiclist.filter(data=> id!=data.id);
      // console.log(id);
  }
  removeTrend(id){
    this.musicService.removeTrend(id);
    this.musiclistrend=this.musiclistrend.filter(data=> id!=data.id);
    // console.log(id);
}
showDetailTrend(music){
    this.musicService.setFavDetailsMusicTrend(music);
    this.router.navigateByUrl("/details/"+music.name);
}
showDetailSearch(music){
    this.musicService.setFavDetailsMusic(music);
    this.router.navigateByUrl("/details/"+music.name);
}
}
