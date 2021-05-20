import { Component, OnInit } from "@angular/core";
import { MusicService } from "../services/music.service";
import { Music } from "../data/module";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-music-details",
  templateUrl: "./music-details.component.html",
  styleUrls: ["./music-details.component.css"],
})
export class MusicDetailsComponent implements OnInit {
  musicList$: Music[] = [];
  removed: boolean;

  constructor(
    private musicService: MusicService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit() {
    let musicId = this.activatedRoute.snapshot.params.id;
    this.musicService.getTrack(musicId).subscribe((data: any) => {
      console.info(data);
      let music: Music = {
        id: data.id,
        name: data.name,
        artistName: data.artistName,
        listeners: data.listeners,
        image: data.image,
        url: data.url,
        favourite: data.favourite,
      };
      this.musicList$.push(music);
    });
  }

  addToFavourite(music: Music) {
    music.favourite = true;
    this.musicService.saveTrack(music);
    this.removed = false;
  }
  removeFromFavourite(music: Music) {
    music.favourite = false;
    this.musicService.saveTrack(music);
    this.removed = true;
  }
}
