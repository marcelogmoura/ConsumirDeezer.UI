// --- Tipos para a busca de Artistas ---
export interface Artist {
id: number;
  name: string;
  picture_medium: string;  
  nb_album: number;        
  nb_fan: number;       
  tracklist: string;
}

export interface AlbumInTrack {
  id: number;
  title: string;
  cover_medium: string; 
}

export interface ArtistSearchResponse {
  data: Artist[];
  total: number;
}

// --- Tipos para a busca de Músicas (Top Tracks) ---
export interface AlbumInTrack {
  id: number;
  title: string;
  coverMedium: string;
}

export interface Track {
  id: number;
  title: string;
  link: string;
  duration: number;
  preview: string;
  album: AlbumInTrack;
}

export interface TracklistResponse {
  data: Track[];
  total: number;
}