import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TextSizeService {
  private readonly storageKey = 'standfirm.sidebarVerseTextSize.v1';
  private readonly defaultSize = 16;
  private readonly minSize = 14;
  private readonly maxSize = 24;
  private readonly textSize$ = new BehaviorSubject<number>(this.readInitialSize());

  get verseTextSize$() {
    return this.textSize$.asObservable();
  }

  getVerseTextSize(): number {
    return this.textSize$.value;
  }

  setVerseTextSize(value: number): void {
    const next = Math.min(this.maxSize, Math.max(this.minSize, Math.round(value)));
    this.textSize$.next(next);
    this.persist(next);
  }

  private readInitialSize(): number {
    if (typeof localStorage === 'undefined') return this.defaultSize;
    const raw = localStorage.getItem(this.storageKey);
    const parsed = raw ? Number(raw) : this.defaultSize;
    if (!Number.isFinite(parsed)) return this.defaultSize;
    return Math.min(this.maxSize, Math.max(this.minSize, Math.round(parsed)));
  }

  private persist(value: number): void {
    if (typeof localStorage === 'undefined') return;
    try {
      localStorage.setItem(this.storageKey, String(value));
    } catch {
      // ignore storage write failures
    }
  }
}
