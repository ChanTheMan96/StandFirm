import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NavigationService {
  private backVisible$ = new BehaviorSubject<boolean>(false);
  private resetView$ = new Subject<void>();

  get showBack$() {
    return this.backVisible$.asObservable();
  }

  setBackVisible(v: boolean) {
    this.backVisible$.next(v);
  }

  get reset$() {
    return this.resetView$.asObservable();
  }

  resetView() {
    this.resetView$.next();
  }
}
