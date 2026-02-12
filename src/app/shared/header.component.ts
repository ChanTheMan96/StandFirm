import { Component, OnInit, OnDestroy, TemplateRef, ViewChild } from '@angular/core';
import { BibleVersionService } from '../services/bible-version.service';
import { NavigationService } from '../services/navigation.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { NzModalService, NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  versions = ['KJV', 'NIV', 'ESV', 'NLT', 'NKJV'];
  selectedVersion = 'KJV';
  showBack = false;
  showVersionModal = false;
  private versionModalRef: NzModalRef | null = null;
  @ViewChild('versionTpl', { static: true }) versionTpl!: TemplateRef<any>;

  private destroy$ = new Subject<void>();

  constructor(private versionSvc: BibleVersionService, private location: Location, private router: Router, private navSvc: NavigationService, private modal: NzModalService) {}

  ngOnInit(): void {
    this.selectedVersion = this.versionSvc.getSelectedVersion();
    this.versionSvc.selectedVersion$.pipe(takeUntil(this.destroy$)).subscribe(v => this.selectedVersion = v);
    this.navSvc.showBack$.pipe(takeUntil(this.destroy$)).subscribe(v => this.showBack = v);
  }

  goHome(event: MouseEvent) {
    event.preventDefault();
    this.navSvc.setBackVisible(false);
    this.navSvc.resetView();
    this.router.navigate(['/']);
  }

  changeVersion(v: string) {
    this.versionSvc.setSelectedVersion(v);
    // auto-close the modal when a version is selected
    this.closeVersionModal();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  goBack(event: MouseEvent) {
    event.preventDefault();
    // Always navigate home from emotion detail to avoid returning to secondary pages
    this.router.navigate(['/']);
  }

  openVersionModal(): void {
    // use programmatic modal to ensure consistent behavior across browsers
    if (this.versionModalRef) {
      return;
    }
    this.versionModalRef = this.modal.create({
      nzTitle: 'Choose Bible Version',
      nzContent: this.versionTpl,
      nzFooter: null,
      nzClosable: true,
      nzWrapClassName: 'version-modal-wrapper',
      nzWidth: 350
    });
    this.versionModalRef.afterClose.subscribe(() => this.versionModalRef = null);
  }

  closeVersionModal(): void {
    if (this.versionModalRef) {
      this.versionModalRef.close();
    }
  }
}
