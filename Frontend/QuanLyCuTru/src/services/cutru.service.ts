import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { CuTru } from '../models/customizes/cutru';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CutruService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<CuTru[]> {
    return this.http.get<CuTru[]>(environment.apiUrl);
  }
}
