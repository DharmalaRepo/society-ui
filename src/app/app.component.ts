import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, RouterModule, SidebarComponent],
})
export class AppComponent {
  constructor(public authService: AuthService, private router: Router) {}

  isLoginPage(): boolean {
    return this.router.url === '/login';
  }
}
