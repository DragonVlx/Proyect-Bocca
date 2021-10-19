import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tournament } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {
  private apiURL = "http://localhost:3001/tournaments";
  constructor(private http: HttpClient) { }

  getTournaments(): Observable<tournament[]> {
    return this.http.get<tournament[]>(this.apiURL);
  }
}
