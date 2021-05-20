import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Music } from "../data/module";

const URL: string = "http://localhost:3004/tracks";

@Injectable({
  providedIn: "root",
})
export class MusicService {
  api_key: string = environment.LAST_FM_API;
  constructor(private http: HttpClient) {}

  url: string = "http://localhost:3004/posts";

  getTrendMusic() {
    return this.http.get(
      `http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=india&api_key=${this.api_key}&format=json`
    );
  }

  getMusic(value) {
    var url = `http://ws.audioscrobbler.com/2.0/?method=track.search&api_key=${this.api_key}&track=${value}&format=json`;
    return this.http.get(url);
  }
  saveTrack(music) {
    this.http.patch(`${URL}/${music.id}`, music).subscribe();
  }
  addTrack(music) {
    return this.http.post(URL, music);
  }
  getTrack(id) {
    return this.http.get(`${URL}/${id}`);
  }
  getAllTrack() {
    return this.http.get(URL);
  }
}
