import { Component, OnInit } from '@angular/core';
import { CutruService } from '../../services/cutru.service';
import { UtilityService } from '../../services/utility.service';
import { AppComponent } from '../../app.component';
import { NguoiDung } from '../../models/standards/nguoidung';
import { CuTru } from '../../models/customizes/cutru';

@Component({
  selector: 'app-cutru',
  templateUrl: './cutru.component.html',
  styleUrls: ['./cutru.component.scss']
})
export class CutruComponent extends AppComponent implements OnInit {
  public cuTrus: CuTruVM[];

  public readonly timKiems = [
    { name: 'Họ tên', value: 'hoTen' },
    { name: 'Địa chỉ', value: 'diaChi' }
  ];

  public readonly loaiCuTrus = [
    { name: 'Tất cả', value: null },
    { name: 'Tạm trú', value: true },
    { name: 'Tạm vắng', value: false }
  ];

  public readonly thoiHans = [
    { name: 'Tất cả', value: null },
    { name: 'Còn hạn', value: true },
    { name: 'Hết hạn', value: false }
  ];

  public readonly trangThais = [
    { name: 'Tất cả', value: null },
    { name: 'Đã duyệt', value: true },
    { name: 'Chưa duyệt', value: false }
  ];

  constructor(
    protected cuTruService: CutruService,
    protected utilitiesService: UtilityService
  ) {
    super(cuTruService, utilitiesService);
    utilitiesService.setDisplayHeader(true);
    utilitiesService.setDisplayFooter(false);
  }

  ngOnInit() {
    this.callAPI_GetAllCuTru();
  }

  private callAPI_GetAllCuTru() {
    // Lấy dữ liệu từ server gán cho trang cư trú
    this.cuTruService.getCuTrus(result => {
      this.handlingGetAllCuTru(result);
    });
  }

  private handlingGetAllCuTru(data: CuTru[]) {
    this.cuTrus = [];
    data.forEach(m => this.cuTrus.push(new CuTruVM(m)));
  }
}

class CuTruVM {
  public id: number;
  public ngayTao: Date;
  public ngayDangKy: Date;
  public ngayHetHan: Date;
  public soNha: String;
  public duong: String;
  public phuong: String;
  public quan: String;
  public thanhPho: String;
  public daDuyet: boolean;
  public loaiCuTruId: number;
  public canBoId: number;
  public congDan: NguoiDung[];

  constructor(cuTru: CuTru) {
    this.id = cuTru.id;
    this.ngayTao = cuTru.ngayTao;
    this.ngayDangKy = cuTru.ngayDangKy;
    this.ngayHetHan = cuTru.ngayHetHan;
    this.soNha = cuTru.soNha;
    this.duong = cuTru.duong;
    this.phuong = cuTru.phuong;
    this.quan = cuTru.quan;
    this.thanhPho = cuTru.thanhPho;
    this.daDuyet = cuTru.daDuyet;
    this.loaiCuTruId = cuTru.loaiCuTruId;
    this.canBoId = cuTru.canBoId;
    this.congDan = cuTru.congDans;
  }

  public getDiaChi() {
    return `${this.soNha} ${this.duong} ${this.phuong} ${this.quan}`;
  }
}
