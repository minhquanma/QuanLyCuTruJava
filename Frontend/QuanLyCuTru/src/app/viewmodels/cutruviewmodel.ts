import { CuTru } from "../models/customizes/cutru";
import { NguoiDung } from "../models/standards/nguoidung";

export class CuTruViewModel implements CuTru {
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

  // Lấy họ tên người dùng
  get hoTen(): String {
    if (this.congDans.length > 1) {
      return "Nhiều người";
    } else if (this.congDans.length == 1) {
      return this.congDans[0].hoTen;
    }
  }
}
