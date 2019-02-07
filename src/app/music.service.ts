import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {Subject} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MusicService {

   
  // // Observable string sources
  // private missionAnnouncedSource = new Subject<string>();
  
 
  // // Observable string streams
  // missionAnnounced$ = this.missionAnnouncedSource.asObservable();

  // Service message commands
  value :string="";
  announceMission(mission: string) {
      this.value=mission;
  //   this.missionAnnouncedSource.next(mission);
  //   console.log(this.missionAnnounced$,this.missionAnnouncedSource);
  // 
}

  constructor(private http:HttpClient) { }
  getTrendMusic():any{
    return this.http.get("http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=34c0d1d6c0886560e6fd3c2e0ebc55c2&format=json");
  }

  getMusic(Svalue):any{
    var url=`http://ws.audioscrobbler.com/2.0/?method=track.search&api_key=34c0d1d6c0886560e6fd3c2e0ebc55c2&track=${this.value}&format=json`;
    return this.http.get(url);
  }
  
}


