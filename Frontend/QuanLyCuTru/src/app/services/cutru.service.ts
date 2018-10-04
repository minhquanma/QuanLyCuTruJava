import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CuTru } from '../models/customizes/cutru';
import { API_URL } from '../utilities/constants';

@Injectable({
  providedIn: 'root'
})
export class CutruService {
  constructor(private http: HttpClient) {}

  public getAllCuTru(serviceCallback: (data: CuTru[]) => void) {
    const observable = this.http.get<CuTru[]>(API_URL.CUTRU);
    observable.subscribe((data: CuTru[]) => {
      serviceCallback(data);
    });
  }
}
