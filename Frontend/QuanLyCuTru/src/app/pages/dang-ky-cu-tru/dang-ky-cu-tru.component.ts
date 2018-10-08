import { Component, OnInit } from "@angular/core";
import { AppComponent } from "../../app.component";
import { CutruService } from "../../services/cutru.service";
import { UtilityService } from "../../services/utility.service";
import { NguoiDung } from "../../models/standards/nguoidung";

@Component({
  selector: "app-dang-ky-cu-tru",
  templateUrl: "./dang-ky-cu-tru.component.html",
  styleUrls: ["./dang-ky-cu-tru.component.scss"]
})
export class DangKyCuTruComponent extends AppComponent implements OnInit {
  public readonly loaiCuTrus = [
    { name: "Tạm vắng", value: 1 },
    { name: "Tạm trú", value: 2 }
  ];
  public bsValue: Date = new Date();

  private selectedLoaiCuTru: number;
  private congDanList: NguoiDung[];

  constructor(
    protected cuTruService: CutruService,
    protected utilitiesService: UtilityService
  ) {
    super(cuTruService, utilitiesService);
    utilitiesService.setDisplayHeader(true);
    utilitiesService.setDisplayFooter(true);
  }

  // Chọn loại cư trú
  onLoaiCuTruSelectChanged(value: number): void {
    this.selectedLoaiCuTru = value;
  }

  // Add công dân
  onAddCongDanClicked(): void {}

  ngOnInit() {}
}
