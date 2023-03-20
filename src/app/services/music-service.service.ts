import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusicServiceService {

  private url_api = "https://api.deezer.com/";

  constructor(private httpclient:HttpClient) { }

  getMusicForAutor(name:string){
    return this.httpclient.get(`${this.url_api + "search?q=" + name}`)
  }
  
  getTrackListForArtist(data:number){
    return this.httpclient.get(`${this.url_api + "album/" + data + "tracks"}`);
  }
}
