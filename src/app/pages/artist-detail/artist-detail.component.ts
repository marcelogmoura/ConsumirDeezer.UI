import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import { ApiService } from '../../services/api.service';
import { Track } from '../../types/deezer.types';

@Component({
  selector: 'app-artist-detail',
  standalone: true,  
  imports: [
    CommonModule, 
    RouterLink
  ],
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.scss']
})
export class ArtistDetailComponent implements OnInit {

  public tracks$: Observable<Track[]> = of([]);

  constructor(
    private route: ActivatedRoute, 
    private apiService: ApiService
  ) {}  

  public ngOnInit(): void {    
    this.tracks$ = this.route.paramMap.pipe(      
      map(params => params.get('id')),      
      switchMap(id => {        
        if (!id) {
          return of([]);
        }        
        return this.apiService.getTopTracks(+id).pipe(         
          map(response => response.data || []),         
          catchError(error => {
            console.error('Erro ao buscar as músicas do artista:', error);
            return of([]);
          })
        );
      })
    );
  }
}