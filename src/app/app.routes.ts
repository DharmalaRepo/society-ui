import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },

  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'residents',
        loadComponent: () =>
          import('./residents/resident-list.component').then(
            (m) => m.ResidentListComponent
          ),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./residents/resident-register.component').then(
            (m) => m.RegisterComponent
          ),
      },
      { path: '', redirectTo: 'residents', pathMatch: 'full' },
    ],
  },

  { path: '**', redirectTo: '/login' },
];
