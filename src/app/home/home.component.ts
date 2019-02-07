import { Component, OnInit } from '@angular/core';
import {MusicService} from '../music.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  value:string;
  constructor(private musicService:MusicService) { }
  arrayOfMusic:any=[];
  ngOnInit() {
      this.musicService.getTrendMusic().subscribe(data=>
        {
            console.log(data.tracks.track);
            this.arrayOfMusic=data.tracks.track;
        });
  }

  search(value){
    console.log(value);
    this.musicService.announceMission(value);
  }

}
