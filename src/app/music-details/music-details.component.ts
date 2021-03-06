import { Component, OnInit } from "@angular/core";
import { MusicService } from "../music.service";

@Component({
  selector: "app-music-details",
  templateUrl: "./music-details.component.html",
  styleUrls: ["./music-details.component.css"]
})
export class MusicDetailsComponent implements OnInit {
  musiclistSearch: any = [];
  musiclistTrend: any = [];

  musiclistFavSearch: any = [];
  musiclistFavTrend: any = [];

  flag: boolean = false;

  constructor(private musicService: MusicService) {}
  ngOnInit() {
    this.musicService.getDetailsMusic().subscribe(data => {
      this.musiclistSearch = data;
      this.musiclistSearch.map(el => {
        this.musicService.deleteDetails(el.id);
      });
    });
    this.musicService.getDetailsMusicTrend().subscribe(data => {
      this.musiclistTrend = data;
      this.musiclistTrend.map(el => {
        this.musicService.deleteDetailsTrend(el.id);
      });
    });
    this.musicService.getFavDetailsMusicTrend().subscribe(data => {
      this.musiclistFavTrend = data;
      this.musiclistFavTrend.map(el => {
        this.musicService.deleteFavDetailsTrend(el.id);
      });
    });
    this.musicService.geFavtDetailsMusic().subscribe(data => {
      this.musiclistFavSearch = data;
      this.musiclistFavSearch.map(el => {
        this.musicService.deleteFavDetails(el.id);
      });
    });
  }

  addToFavFromTrend(music) {
    this.musicService.setFavouriteMusicTrends(music);
    this.flag = true;
  }
  addToFavFromSearch(music) {
    this.musicService.setFavouriteMusic(music);
    this.flag = true;
  }

  removeFromFavSearch(music) {
    this.musicService.remove(music.id);
    this.flag = true;
  }
  removeFromFavTrend(music) {
    this.musicService.removeTrend(music.id);
    this.flag = true;
  }
}
