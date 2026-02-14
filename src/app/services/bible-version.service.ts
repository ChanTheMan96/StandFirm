import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { BibleBook, BIBLE_BOOKS_BY_VERSION } from '../data/bible-books.data';

export interface BibleVersionOption {
  id: string;
  name: string;
  abbreviation?: string;
  language?: string;
}

@Injectable({ providedIn: 'root' })
export class BibleVersionService {
  private version$ = new BehaviorSubject<string>(environment.apiBible.defaultBibleId);

  get selectedVersion$() {
    return this.version$.asObservable();
  }

  getSelectedVersion(): string {
    return this.version$.value;
  }

  setSelectedVersion(v: string) {
    this.version$.next(v);
  }

  getAvailableVersions(): Observable<BibleVersionOption[]> {
    return of([
      { name: 'NIV', id: '78a9f6124f344018-01' },
      { name: 'NLT', id: 'd6e14a625393b4da-01' },
      { name: 'NKJV', id: '63097d2a0a2f7db3-01' }
    ]);
  }

  getBooksForVersion(bibleId: string): Observable<BibleBook[]> {
    return of(BIBLE_BOOKS_BY_VERSION[bibleId] || []);
  }

  getBooksForSelectedVersion(): Observable<BibleBook[]> {
    return this.getBooksForVersion(this.getSelectedVersion());
  }
}
