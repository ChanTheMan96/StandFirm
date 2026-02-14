import { Component, EventEmitter, Output } from '@angular/core';
import { NavigationService } from '../services/navigation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() changeVersionRequested = new EventEmitter<void>();
  mobileMenuOpen = false;

  constructor(private router: Router, private navSvc: NavigationService) {}

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
}
