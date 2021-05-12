import { Component, OnInit} from '@angular/core';
import {MusicService} from '../services/music.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  
  constructor(private musicService:MusicService, private route: ActivatedRoute,private location: Location,
    private router:Router) { }
  arrayOfMusic:any=[];
  ngOnInit() {

    this.getMusic();
   
  }
  getMusic(): void {

      const search = this.route.snapshot.paramMap.get('id');
       this.musicService.getMusic(search).subscribe(data => {
       this.arrayOfMusic=data.results.trackmatches.track;
      //  console.log(this.arrayOfMusic);
      
    });
  }
 
  goBack(): void {
    this.location.back();
  }
  addToFavs(music){
    this.musicService.setFavouriteMusic(music);
      // console.log([music]);
  }
  showDetail(music){
      this.musicService.setDetailsMusic(music);
      this.router.navigateByUrl('/details/'+music.name);
  }

}
