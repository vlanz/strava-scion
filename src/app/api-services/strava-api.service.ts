import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../core/auth/auth.service';

@Injectable()
export class StravaApiService {
  private baseUrl = 'https://www.strava.com/api/v3/';

  constructor(private http: HttpClient,
              private authService: AuthService) {
  }

  getMyInfo(): Observable<any> {
    return this.http.get(`${this.baseUrl}athletes/23576093`);
  }

  getActivities(amount: number = 30): Observable<any> {
    return this.http.get(`${this.baseUrl}athlete/activities?per_page=${amount}`);
  }

  getActivityById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/activities/${id}`);
  }
}
