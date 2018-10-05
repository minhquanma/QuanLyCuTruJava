import { NguoiDung } from "../standards/nguoidung";

export interface CuTru {
  id: number;
  ngayTao: Date;
  ngayDangKy: Date;
  ngayHetHan: Date;
  soNha: String;
  duong: String;
  phuong: String;
  quan: String;
  thanhPho: String;
  daDuyet: boolean;
  loaiCuTruId: number;
  canBoId: number;
  congDans: NguoiDung[];
}
