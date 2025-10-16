import { Routes } from '@angular/router';
import { SearchComponent } from './pages/search/search.component';
import { ArtistDetailComponent } from './pages/artist-detail/artist-detail.component';

export const routes: Routes = [
    { path: '', component: SearchComponent },
    { path: 'artist/:id', component: ArtistDetailComponent }
];
