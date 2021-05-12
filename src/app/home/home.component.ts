import { Component, OnInit } from '@angular/core';
import {MusicService} from '../services/music.service';
import { Router } from '@angular/router';

class Music{
  artistName:string;
  image:string;
  name:string;
  listeners:string;
  url:string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  arrayOfMusic:any=[];
  music:Music;
  constructor(private musicService:MusicService ,private route :Router) { }
  
  ngOnInit() {
      this.musicService.getTrendMusic().subscribe(data=>
        {
            console.log(data.tracks.track);
            // this.arrayOfMusic=data.tracks.track
            var result:any
            result=data.tracks.track.map(data=>{
            this.music=new Music();
            this.music.artistName=data.artist.name
            this.music.image=data.image[1]["#text"]
            this.music.name=data.name
            this.music.listeners=data.listeners
            this.music.url=data.url
            return this.music;
        });
        this.arrayOfMusic=result
        console.log(result)
      });
  }

  click(value){
    this.route.navigateByUrl("/result/"+value);
  }
  showDetail(music){
    this.musicService.setDetailsMusicTrend(music);
    this.route.navigateByUrl("/details/"+music.name);
  }
  addToFavsfromTrend(music){
    this.musicService.setFavouriteMusicTrends(music);
  }
  searchMusic(name){
    
  }
}
