import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { NguoiDung } from '../models/standards/nguoidung';
import { API_URL } from '../utilities/constants';

@Injectable({
  providedIn: 'root'
})
export class CongdanService {
  constructor(private http: HttpClient) {}

  // Lấy danh sách công dân
  public getNguoiDungs(serviceCallback: (data: NguoiDung[]) => void) {
    const observable = this.http.get<NguoiDung[]>(API_URL.DAN);
    observable.subscribe((data: NguoiDung[]) => {
      serviceCallback(data);
    }, (error) => {
      serviceCallback(null);
    });
  }

  // Lấy danh sách công dân theo theo Id
  public getNguoiDungById(nguoiDungId: number, serviceCallback: (data: NguoiDung) => void) {
    const url = `${API_URL.DAN}/${nguoiDungId}`;
    const observable = this.http.get<NguoiDung>(url);
    observable.subscribe((data: NguoiDung) => {
        serviceCallback(data);
      }, (error) => {
        serviceCallback(null);
      }
    );
  }
}
