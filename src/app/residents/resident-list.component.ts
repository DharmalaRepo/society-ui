import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResidentService, Resident } from './resident.service';

@Component({
  selector: 'app-resident-list',
  templateUrl: './resident-list.component.html',
  styleUrls: ['./resident-list.component.css'],
  standalone: true,
  imports: [CommonModule] // Add CommonModule if needed
})
export class ResidentListComponent implements OnInit {
  residents: Resident[] = [];

  constructor(private residentService: ResidentService) {}

  ngOnInit(): void {
    this.residentService.getAllResidents().subscribe({
      next: (data) => this.residents = data,
      error: (err) => console.error('Error fetching residents:', err)
    });
  }
}
