import { Component } from '@angular/core';
import { MusicServiceService } from './services/music-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practica_5';
  public musicas:any;
  public id_album:any;
  public track_list:any;
  constructor(private musicservice:MusicServiceService){};


  getArtistForName(artist:any){
    this.musicservice.getMusicForAutor(artist.value).subscribe({
      next: (s) =>{
        this.musicas = s;
        debugger
      },
      error: (err) =>{
        console.log(err);
      }
    })
  }

  getTrackListForArtist(id:number){
    this.musicservice.getTrackListForArtist(id).subscribe({
      next: (s) =>{
        this.track_list = s;
        debugger;
      },
      error: (err) =>{
        console.log(err);
      }
    })
  }
}
