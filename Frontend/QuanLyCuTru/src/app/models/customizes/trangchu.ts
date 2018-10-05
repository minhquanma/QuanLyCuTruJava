import { CuTru } from "./cutru";
import { CuTruViewModel } from "../../viewmodels/cutruviewmodel";

export interface TrangChu {
  tongSo: number;
  dangKyHomNay: number;
  choDuyet: number;
  hetHan: number;
  cuTrus: CuTruViewModel[];
}
