import { Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";
import { AppComponent } from "../../app.component";
import { CutruService } from "../../services/cutru.service";
import { UtilityService } from "../../services/utility.service";
import { NguoiDung } from "../../models/standards/nguoidung";
import { CongdanService } from "../../services/congdan.service";

@Component({
  selector: "app-dang-ky-cu-tru",
  templateUrl: "./dang-ky-cu-tru.component.html",
  styleUrls: ["./dang-ky-cu-tru.component.scss"]
})
export class DangKyCuTruComponent extends AppComponent implements OnInit {
  public ngayTao: Date = new Date();
  public ngayDangKy: Date = new Date();
  public ngayHetHan: Date = new Date();

  public readonly loaiCuTrus = [
    { name: "Tạm vắng", value: 1 },
    { name: "Tạm trú", value: 2 }
  ];
  public bsValue: Date = new Date();

  private selectedLoaiCuTru: number;
  public congDanList: Array<NguoiDung> = new Array<NguoiDung>();

  constructor(
    protected cuTruService: CutruService,
    protected congDanService: CongdanService,
    protected utilitiesService: UtilityService
  ) {
    super(cuTruService, utilitiesService);
    utilitiesService.setDisplayHeader(true);
    utilitiesService.setDisplayFooter(true);
  }

  ngOnInit() {
    this.ngayHetHan.setMonth(this.ngayHetHan.getMonth() + 1);
  }

  public onAddCongDanClicked(value: number): void {
    // 1. Kiểm tra xem trong mảng đã tồn tại người dùng này hay chưa
    // Tìm kiếm trong mảng với id được nhập từ user
    const findCongDan = this.congDanList.find(congDan => congDan.id == value);

    // <> Trường hợp mảng chưa tồn tại người dùng này
    if (findCongDan == null) {
      // 2. Lấy thông tin người dùng từ server
      this.congDanService.getNguoiDungById(value, congDan => {
        // <> Trường hợp tìm thấy công dân
        if (congDan != null) {
          // 3. Thêm người dùng này vào danh sách công dân
          this.congDanList.push(congDan);
        } else {
          // <> Trường hợp không tìm thấy công dân
          window.alert("Khong tim thay cong dan");
        }
      });
    } else {
      // <> Trường hợp mảng đã tồn tại người dùng này
      window.alert("Vui long nhap cong dan khac!");
    }
    // Kết thúc xử lý
  }

  public onLoaiCuTruSelectChanged(value: number): void {
    console.log(value);
  }

  public submit(value) {
    console.log(value);
  }
}
