import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResidentService, Resident } from './resident.service';

@Component({
  selector: 'app-resident-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Resident List</h2>
    <ul *ngIf="residents.length > 0; else noData">
      <li *ngFor="let resident of residents">
        {{ resident.name }} ({{ resident.flatNumber }}) - {{ resident.phone }}
      </li>
    </ul>
    <ng-template #noData><p>No residents found.</p></ng-template>
  `
})
export class ResidentListComponent implements OnInit {
  residents: Resident[] = [];

  constructor(private residentService: ResidentService) {}

  ngOnInit(): void {
    this.residentService.getAllResidents().subscribe({
      next: (data) => (this.residents = data),
      error: (err) => console.error('Error fetching residents', err),
    });
  }
}
