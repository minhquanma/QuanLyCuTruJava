import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CuTru } from '../models/customizes/cutru';
import { API_URL } from '../utilities/constants';
import { TrangChu } from '../models/customizes/trangchu';

@Injectable({
  providedIn: 'root'
})
export class CutruService {
  constructor(private http: HttpClient) {}

  // Lấy danh sách cư trú
  public getCuTrus(serviceCallback: (data: CuTru[]) => void) {
    const observable = this.http.get<CuTru[]>(API_URL.CUTRU);
    observable.subscribe((data: CuTru[]) => {
      serviceCallback(data);
    });
  }

  // Lấy thông tin tóm tắt cho trang chủ
  public getTrangChuInfo(serviceCallback: (data: TrangChu) => void) {
    const observable = this.http.get<TrangChu>(API_URL.CUTRU + '/trangchu');
    observable.subscribe((data: TrangChu) => {
      serviceCallback(data);
    });
  }

  // Tạo mới cư trú
  public createCuTru(cuTru: CuTru, serviceCallback: (data: CuTru) => void) {
    const observable = this.http.post(API_URL.CUTRU, cuTru);
    observable.subscribe(
      (data: CuTru) => {
        serviceCallback(data);
      },
      error => {
        serviceCallback(null);
        console.log(error);
      }
    );
  }

  // Cập nhật cư trú theo id
  public updateCuTru(
    id: number,
    cuTru: CuTru,
    serviceCallback: (data: CuTru) => void
  ) {
    const url = `${API_URL.CUTRU}/${id}`;
    const observable = this.http.put(url, cuTru);
    observable.subscribe(
      (data: CuTru) => {
        serviceCallback(data);
      },
      error => {
        serviceCallback(null);
        console.log(error);
      }
    );
  }
}
