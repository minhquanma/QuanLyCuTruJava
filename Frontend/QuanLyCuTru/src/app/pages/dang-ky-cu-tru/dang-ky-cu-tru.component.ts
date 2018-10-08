import { Component, OnInit } from "@angular/core";
import { AppComponent } from "../../app.component";
import { CutruService } from "../../services/cutru.service";
import { UtilityService } from "../../services/utility.service";

@Component({
  selector: "app-dang-ky-cu-tru",
  templateUrl: "./dang-ky-cu-tru.component.html",
  styleUrls: ["./dang-ky-cu-tru.component.scss"]
})
export class DangKyCuTruComponent extends AppComponent implements OnInit {
  public readonly loaiCuTrus = [
    { name: "Tạm vắng", value: true },
    { name: "Tạm trú", value: false }
  ];
  constructor(
    protected cuTruService: CutruService,
    protected utilitiesService: UtilityService
  ) {
    super(cuTruService, utilitiesService);
    utilitiesService.setDisplayHeader(true);
    utilitiesService.setDisplayFooter(true);
  }

  ngOnInit() {}
}
