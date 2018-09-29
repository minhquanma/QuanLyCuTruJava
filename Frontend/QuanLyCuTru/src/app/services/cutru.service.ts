import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CuTru } from '../models/customizes/cutru';
import { API_URL } from '../utilities/constants';

@Injectable({
  providedIn: 'root'
})
export class CutruService {
  constructor(private http: HttpClient) {}

  public getAllCuTru(): Observable<CuTru[]> {
    return this.http.get<CuTru[]>(API_URL.CUTRU);
  }
}
