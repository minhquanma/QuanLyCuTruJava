import { Component, OnInit } from "@angular/core";
import { AppComponent } from "../../app.component";
import { CutruService } from "../../services/cutru.service";
import { UtilityService } from "../../services/utility.service";
import { TrangChu } from "../../models/customizes/trangchu";
import { CuTru } from "../../models/customizes/cutru";
import { NguoiDung } from "../../models/standards/nguoidung";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent extends AppComponent implements OnInit {
  trangChu: TrangChu;

  constructor(
    protected cuTruService: CutruService,
    protected utilitiesService: UtilityService
  ) {
    super(cuTruService, utilitiesService);
    utilitiesService.setDisplayHeader(true);
    utilitiesService.setDisplayFooter(false);
  }

  ngOnInit() {
    // Khởi tạo object TrangChu
    this.trangChu = {
      tongSo: 0,
      dangKyHomNay: 0,
      choDuyet: 0,
      hetHan: 0,
      cuTrus: new Array<CuTru>()
    };

    // Lấy dữ liệu từ server gán vào TrangChu
    this.cuTruService.getTrangChuInfo(trangChu => {
      this.trangChu = trangChu;
      console.table(trangChu.cuTrus);
    });
  }
}
