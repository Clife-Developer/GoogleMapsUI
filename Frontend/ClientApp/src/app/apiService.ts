import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private apiUrl = 'https://localhost:44368/api';

    constructor(private http: HttpClient) {}

    get<T>(marker: any): Observable<T> {
        return this.http.get<T>(`${this.apiUrl}/${'getmapslocation?latitude='}${marker.position.lat}?longitude${marker.position.lng}`);
    }

    post<T>(endpoint: string, data: any): Observable<T> {
        return this.http.post<T>(`${this.apiUrl}/${endpoint}`, data, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        });
    }

    put<T>(endpoint: string, data: any): Observable<T> {
        return this.http.put<T>(`${this.apiUrl}/${endpoint}`, data, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        });
    }

    delete<T>(endpoint: string): Observable<T> {
        return this.http.delete<T>(`${this.apiUrl}/${endpoint}`);
    }
}