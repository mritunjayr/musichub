import { Component, OnInit } from "@angular/core";
import { MusicService } from "../services/music.service";
import { Music } from "../data/module";
@Component({
  selector: "app-music-details",
  templateUrl: "./music-details.component.html",
  styleUrls: ["./music-details.component.css"],
})
export class MusicDetailsComponent implements OnInit {
  musicList$: Music[] = [];
  flag: boolean = false;

  constructor(private musicService: MusicService) {}
  ngOnInit() {
    this.musicService.getDetailsMusic().subscribe((dataArray: any[]) => {
      dataArray.forEach((data) => {
        console.info(data);
        this.musicList$.push({
          id: data.id,
          name: data.name,
          artistName: data.artistName,
          listeners: data.listeners,
          image: data.image,
          url: data.url,
        });
      });
      // this.musicList.map(el => {
      //   this.musicService.deleteDetails(el.id);
      // });
    });
    this.musicService.getDetailsMusicTrend().subscribe((dataArray: any[]) => {
      dataArray.forEach((data) => {
        console.info(data);
        this.musicList$.push({
          id: data.id,
          name: data.name,
          artistName: data.artistName,
          listeners: data.listeners,
          image: data.image,
          url: data.url,
        });
      });

      // this.musicList.map(el => {
      //   this.musicService.deleteDetailsTrend(el.id);
      // });
    });
    this.musicService
      .getFavDetailsMusicTrend()
      .subscribe((dataArray: any[]) => {
        dataArray.forEach((data) => {
          console.info(data);
          this.musicList$.push({
            id: data.id,
            name: data.name,
            artistName: data.artistName,
            listeners: data.listeners,
            image: data.image,
            url: data.url,
          });
        });
        // this.musicList.map(el => {
        //   this.musicService.deleteFavDetailsTrend(el.id);
        // });
      });
    this.musicService.geFavtDetailsMusic().subscribe((dataArray: any[]) => {
      dataArray.forEach((data) => {
        console.info(data);
        this.musicList$.push({
          id: data.id,
          name: data.name,
          artistName: data.artistName,
          listeners: data.listeners,
          image: data.image,
          url: data.url,
        });
      });
      // this.musicList.map(el => {
      //   this.musicService.deleteFavDetails(el.id);
      // });
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
