import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent {
  private readonly router = inject(Router);

  logout(): void {
    localStorage.removeItem('jwtToken');
    this.router.navigate(['/']);
  }
}
