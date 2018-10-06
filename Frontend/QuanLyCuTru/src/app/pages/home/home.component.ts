import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { CutruService } from '../../services/cutru.service';
import { UtilityService } from '../../services/utility.service';
import { TrangChu } from '../../models/customizes/trangchu';
import { CuTru } from '../../models/customizes/cutru';
import { NguoiDung } from '../../models/standards/nguoidung';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
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
    this.callAPI_GetTrangChuInfo();
  }

  private callAPI_GetTrangChuInfo() {
    // Lấy dữ liệu từ server gán vào TrangChu
    this.cuTruService.getTrangChuInfo(trangChu => {
      this.trangChu = trangChu;
    });
  }
}
