import { Component, OnInit} from '@angular/core';
import {MusicService} from '../music.service';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  
  constructor(private musicService:MusicService) { }
  arrayOfMusic:any=[];
  ngOnInit() {
    
   this.musicService.getMusic('ss')
     .subscribe(data => {
       this.arrayOfMusic=data.results.trackmatches.track;
       console.log(this.arrayOfMusic);

    });
   ;
  }

}
