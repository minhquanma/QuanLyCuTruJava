import { NguoiDung } from '../standards/nguoidung';

export interface CuTru {
  id: number;
  ngayTao: Date;
  ngayDangKy: Date;
  ngayHetHan: Date;
  soNha: string;
  duong: string;
  phuong: string;
  quan: string;
  thanhPho: string;
  daDuyet: boolean;
  loaiCuTruId: number;
  canBoId: number;
  congDan: NguoiDung;
}
