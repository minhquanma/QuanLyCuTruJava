import { Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";
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
  public ngayTao: Date = new Date();
  public ngayDangKy: Date = new Date();
  public ngayHetHan: Date = new Date();

  public readonly loaiCuTrus = [
    { name: "Tạm vắng", value: 1 },
    { name: "Tạm trú", value: 2 }
  ];
  public bsValue: Date = new Date();

  private selectedLoaiCuTru: number;
  public congDanList: String[] = [];

  constructor(
    protected cuTruService: CutruService,
    protected utilitiesService: UtilityService
  ) {
    super(cuTruService, utilitiesService);
    utilitiesService.setDisplayHeader(true);
    utilitiesService.setDisplayFooter(true);
  }

  ngOnInit() {
    this.ngayHetHan.setMonth(this.ngayHetHan.getMonth() + 1);
  }

  public onAddCongDanClicked(value): void {
    this.congDanList.push(value);
  }

  public onLoaiCuTruSelectChanged(value: number): void {
    console.log(value);
  }

  public submit(value) {
    console.log(value);
  }
}
