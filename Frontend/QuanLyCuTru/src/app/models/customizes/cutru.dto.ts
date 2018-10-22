import { CuTru } from './cutru';
import { NguoiDung } from './../standards/nguoidung';

export class CuTruDTO {
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
  public congDans: NguoiDung[];

  constructor(cuTru) {
    this.ngayTao = new Date(cuTru.ngayTao);
    this.ngayDangKy = new Date(cuTru.ngayDangKy);
    this.ngayHetHan = new Date(cuTru.ngayHetHan);
    this.soNha = cuTru.soNha;
    this.duong = cuTru.duong;
    this.phuong = cuTru.phuong;
    this.quan = cuTru.quan;
    this.thanhPho = cuTru.thanhPho;
    this.daDuyet = false;
    this.loaiCuTruId = cuTru.loaiCuTruId;
    this.canBoId = cuTru.canBoId;
    this.congDans = cuTru.congDans;
  }
}
