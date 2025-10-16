import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, map, catchError, startWith } from 'rxjs/operators';

import { ApiService } from '../../services/api.service';
import { Artist } from '../../types/deezer.types';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
 
  public searchControl = new FormControl('', { nonNullable: true });

 
  public artists$: Observable<Artist[]> = of([]);
  
  private readonly DEBOUNCE_TIME_MS = 400;
  private readonly MIN_SEARCH_LENGTH = 2;

  constructor(
    private apiService: ApiService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.artists$ = this.searchControl.valueChanges.pipe(      
      startWith(''),      
      debounceTime(this.DEBOUNCE_TIME_MS),      
      distinctUntilChanged(),      
      switchMap(term => {
        
        if (term.length <= this.MIN_SEARCH_LENGTH) {
          return of([]);
        }
        
        return this.apiService.searchArtists(term).pipe(          
          map(response => response.data || []),          
          catchError(error => {
            console.error('Erro ao buscar artistas:', error);
            return of([]);
          })
        );
      })
    );
  }

  /**   .
   * @param id  
   */
  public selectArtist(id: number): void {
    if (!id) return; 
    this.router.navigate(['/artist', id]);
  }

  /** 
   * @param event 
   */
  public handleImageError(event: Event): void {
    (event.target as HTMLImageElement).src = 'https://via.placeholder.com/80?text=No+Image';
  }
}