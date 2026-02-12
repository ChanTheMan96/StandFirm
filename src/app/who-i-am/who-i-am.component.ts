import { Component, OnInit, OnDestroy } from '@angular/core';
import { BibleVersionService } from '../services/bible-version.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-who-i-am',
  templateUrl: './who-i-am.component.html',
  styleUrls: ['./who-i-am.component.scss']
})
export class WhoIAmComponent implements OnInit, OnDestroy {
  versions = ['KJV', 'NIV', 'ESV', 'NLT', 'NKJV'];
  selectedVersion = 'KJV';

  private destroy$ = new Subject<void>();

  constructor(private versionSvc: BibleVersionService) {}

  ngOnInit(): void {
    this.selectedVersion = this.versionSvc.getSelectedVersion();
    this.versionSvc.selectedVersion$.pipe(takeUntil(this.destroy$)).subscribe(v => this.selectedVersion = v);
  }

  changeVersion(v: string) {
    this.versionSvc.setSelectedVersion(v);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
