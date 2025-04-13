import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Resident {
  id?: string;
  name: string;
  flatNumber: string;
  phone: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class ResidentService {
  private baseUrl = 'http://<YOUR-GATEWAY-IP>/resident/api/users'; // Replace with actual GKE gateway IP

  constructor(private http: HttpClient) {}

  getAllResidents(): Observable<Resident[]> {
    return this.http.get<Resident[]>(`${this.baseUrl}/all`);
  }

  registerResident(resident: Resident): Observable<Resident> {
    return this.http.post<Resident>(`${this.baseUrl}/register`, resident);
  }

  deleteResident(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }
}
