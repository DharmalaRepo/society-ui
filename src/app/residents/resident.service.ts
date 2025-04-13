import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

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
  private baseUrl = environment.residentServiceBaseUrl;

  constructor(private http: HttpClient) {}

  getAllResidents(): Observable<Resident[]> {
    //return this.http.get<Resident[]>(`${this.baseUrl}/api/users/getAllUsers`);  http://localhost:9090/api/users/getAllUsers
    return this.http.get<Resident[]>(`${this.baseUrl}/api/users/getAllUsers`);
  }

  registerResident(resident: Resident): Observable<Resident> {
    return this.http.post<Resident>(`${this.baseUrl}/register`, resident);
  }

  deleteResident(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }
}
