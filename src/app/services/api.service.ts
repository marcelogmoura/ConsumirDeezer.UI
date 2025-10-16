// Local: src/app/services/api.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArtistSearchResponse, TracklistResponse } from '../types/deezer.types';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly apiUrl = 'http://localhost:5215/api';

  constructor(private http: HttpClient) { }

  /**
   *  
   * @param artistName  
   * @returns  
   */
  // 
  searchArtists(artistName: string): Observable<ArtistSearchResponse> {
    return this.http.get<ArtistSearchResponse>(`${this.apiUrl}/artists/search/${artistName}`);
  }

  /**
   * 
   * @param artistId  
   * @returns  
   */
  
  getTopTracks(artistId: number): Observable<TracklistResponse> {
    return this.http.get<TracklistResponse>(`${this.apiUrl}/artists/${artistId}/top-tracks`);
  }
}