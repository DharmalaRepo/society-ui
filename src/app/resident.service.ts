@Injectable({ providedIn: 'root' })
export class ResidentService {
  private apiUrl = 'http://<GKE_IP>/resident/api/users';

  constructor(private http: HttpClient) {}

  getResidents(): Observable<Resident[]> {
    return this.http.get<Resident[]>(this.apiUrl);
  }

  registerResident(resident: Resident): Observable<Resident> {
    return this.http.post<Resident>(this.apiUrl, resident);
  }
}
