import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

interface UnsplashResponse {
  urls: {
    regular: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class GetPhotoService {
  constructor(private http: HttpClient) {}

  getPhoto() {
    return this.http
      .get<UnsplashResponse>('https://api.unsplash.com/photos/random', {
        headers: {
          'Accept-Version': 'v1',
          Authorization:
            'Client-ID K7kYhL9wvlGkB0k88j93TcIbIepyeSktHfeayZ6OY-I',
        },
      })
      .pipe(map((x) => x.urls.regular));
  }
}
