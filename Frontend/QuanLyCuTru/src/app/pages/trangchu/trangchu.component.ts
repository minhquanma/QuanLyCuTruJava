import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { CutruService } from '../../services/cutru.service';
import { UtilityService } from '../../services/utility.service';
import { TrangChu } from '../../models/customizes/trangchu';

@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.scss']
})
export class TrangchuComponent extends AppComponent implements OnInit {
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
