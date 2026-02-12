import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface BibleVerse {
  book_id?: number;
  book_name: string;
  chapter: number;
  verse: number;
  text: string;
}

export interface BiblePassage {
  reference: string;
  verses: BibleVerse[];
  text?: string;
  translation_id?: string;
  translation_name?: string;
}

@Injectable({
  providedIn: 'root'
})
export class BibleService {
  private base = 'https://bible-api.com';

  constructor(private http: HttpClient) { }

  private cleanText(s: string | undefined | null): string {
    if (!s) return '';
    // remove newlines, carriage returns and collapse multiple whitespace into single space
    return s.replace(/[\r\n]+/g, ' ').replace(/\s+/g, ' ').trim();
  }

  getPassage(ref: string): Observable<BiblePassage> {
    const url = `${this.base}/${encodeURIComponent(ref)}?translation=kjv`;
    return this.http.get<BiblePassage>(url).pipe(
      map(p => {
        if (!p) return p;
        if (p.verses && Array.isArray(p.verses)) {
          p.verses = p.verses.map(v => ({ ...v, text: this.cleanText(v.text) }));
        }
        if (p.text) {
          p.text = this.cleanText(p.text as unknown as string);
        }
        return p;
      })
    );
  }
}
