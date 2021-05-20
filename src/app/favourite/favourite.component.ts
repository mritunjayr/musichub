import { Component, OnInit } from "@angular/core";
import { MusicService } from "../services/music.service";
import { Router } from "@angular/router";
import { Music } from "../data/module";

@Component({
  selector: "app-favourite",
  templateUrl: "./favourite.component.html",
  styleUrls: ["./favourite.component.css"],
})
export class FavouriteComponent implements OnInit {
  musicList: Music[] = [];
  constructor(private musicService: MusicService, private router: Router) {}
  ngOnInit() {
    this.musicService.getAllTrack().subscribe((data: Music[]) => {
      this.musicList = data.filter((track: Music) => track.favourite == true);
    });
  }
  showDetail(music) {
    this.router.navigate(["/details/", music.id]);
  }
  removeFromFavourite(music: Music) {
    music.favourite = false;
    this.musicService.saveTrack(music);
    this.musicList = this.musicList.filter((track) => track.id != music.id);
  }
}
