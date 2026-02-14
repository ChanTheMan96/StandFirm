import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { NavigationService } from '../services/navigation.service';
import { Router } from '@angular/router';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() changeVersionRequested = new EventEmitter<void>();
  mobileMenuOpen = false;
  private deferredInstallPrompt: BeforeInstallPromptEvent | null = null;
  private readonly isIosDevice =
    typeof navigator !== 'undefined' && /iphone|ipad|ipod/i.test(navigator.userAgent);

  constructor(private router: Router, private navSvc: NavigationService) {}

  @HostListener('window:beforeinstallprompt', ['$event'])
  onBeforeInstallPrompt(event: Event): void {
    event.preventDefault();
    this.deferredInstallPrompt = event as BeforeInstallPromptEvent;
  }

  @HostListener('window:appinstalled')
  onAppInstalled(): void {
    this.deferredInstallPrompt = null;
  }

  goHome(event: MouseEvent): void {
    event.preventDefault();
    this.closeMobileMenu();
    this.navSvc.setBackVisible(false);
    this.navSvc.resetView();
    this.router.navigate(['/']);
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }

  openVersionPicker(): void {
    this.closeMobileMenu();
    this.changeVersionRequested.emit();
  }

  async addToHomeScreen(): Promise<void> {
    this.closeMobileMenu();

    if (this.deferredInstallPrompt) {
      this.deferredInstallPrompt.prompt();
      await this.deferredInstallPrompt.userChoice.catch(() => undefined);
      this.deferredInstallPrompt = null;
      return;
    }

    if (this.isIosDevice) {
      alert('On iPhone/iPad: tap Share, then tap "Add to Home Screen".');
      return;
    }

    alert('Use your browser menu and select "Install app" or "Add to Home screen".');
  }
}
