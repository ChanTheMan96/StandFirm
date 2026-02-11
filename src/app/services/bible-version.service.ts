import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BibleVersionService {
  private version$ = new BehaviorSubject<string>('KJV');

  get selectedVersion$() {
    return this.version$.asObservable();
  }

  getSelectedVersion(): string {
    return this.version$.value;
  }

  setSelectedVersion(v: string) {
    this.version$.next(v);
  }
}
