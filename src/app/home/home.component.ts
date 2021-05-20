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
    this.loadAllDataFromApi();
  }

  loadAllDataFromApi() {
    let id = 1;
    this.musicService.getTrendMusic().subscribe((data: any) => {
      data.tracks.track.forEach((track) => {
        let data: Music = {
          id: id,
          artistName: track.artist.name,
          image: track.image[1]["#text"],
          name: track.name,
          listeners: track.listeners,
          url: track.url,
          durations: track.durations,
        };
        this.arrayOfMusic.push(data);
        this.musicService.saveTrack(data);
        id++;
      });
    });
  }

  showDetail(music: Music) {
    this.route.navigate(["/details/", music.id]);
  }
  addToFavourite(music: Music) {
    music.favourite = true;
    this.musicService.saveTrack(music);
  }
  searchMusic(name) {
    this.route.navigate(["/result/", name]);
  }
}
