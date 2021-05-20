import { Component, OnInit } from "@angular/core";
import { MusicService } from "../services/music.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";
import { Music } from "../data/module";

@Component({
  selector: "app-search-result",
  templateUrl: "./search-result.component.html",
  styleUrls: ["./search-result.component.css"],
})
export class SearchResultComponent implements OnInit {
  constructor(
    private musicService: MusicService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}
  arrayOfMusic: Music[] = [];
  ngOnInit() {
    this.getMusic();
  }
  getMusic(): void {
    const search = this.route.snapshot.paramMap.get("id");
    this.musicService.getMusic(search).subscribe((data: any) => {
      data.results.trackmatches.track.forEach((track) => {
        let music: Music = {
          name: track.name,
          artistName: track.artist,
          image: track.image[3]["#text"],
          listeners: track.listeners,
          url: track.url,
        };
        this.arrayOfMusic.push(music);
      });
    });
  }
  showDetail(music) {
    this.musicService.addTrack(music).subscribe((data: any) => {
      this.router.navigate(["/details/", data.id]);
    });
  }
  addToFavourite(music: Music) {
    music.favourite = true;
    this.musicService.addTrack(music).subscribe();
  }
}
