import { Component, OnInit } from "@angular/core";
import { MusicService } from "../services/music.service";
import { Router } from "@angular/router";
import { Music } from "../data/module";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  arrayOfMusic: Music[] = [];
  constructor(private musicService: MusicService, private route: Router) {}

  ngOnInit() {
    this.musicService.getTrendMusic().subscribe((data) => {
      data.tracks.track.forEach((track) => {
        let data: Music = {
          artistName: track.artist.name,
          image: track.image[1]["#text"],
          name: track.name,
          listeners: track.listeners,
          url: track.url,
          durations: track.durations,
        };
        this.arrayOfMusic.push(data);
      });
    });
  }

  click(value) {
    this.route.navigateByUrl("/result/" + value);
  }
  showDetail(music: Music) {
    this.musicService.setDetailsMusicTrend(music);
    this.route.navigateByUrl("/details/" + music.name);
  }
  addToFavsfromTrend(music: Music) {
    this.musicService.setFavouriteMusicTrends(music);
  }
  searchMusic(name) {}
}
