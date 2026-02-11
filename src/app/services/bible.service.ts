import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BibleService {
  private base = 'https://bible-api.com';

  constructor(private http: HttpClient) { }

  getPassage(ref: string): Observable<any> {
    const url = `${this.base}/${encodeURIComponent(ref)}`;
    return this.http.get(url);
  }
}
