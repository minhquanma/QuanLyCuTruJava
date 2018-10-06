import { Component, OnInit } from '@angular/core';
import { CutruService } from '../../services/cutru.service';
import { UtilityService } from '../../services/utility.service';
import { AppComponent } from '../../app.component';
import { CongdanService } from '../../services/congdan.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { NguoiDung } from '../../models/standards/nguoidung';

@Component({
  selector: 'app-chi-tiet-cong-dan',
  templateUrl: './chi-tiet-cong-dan.component.html',
  styleUrls: ['./chi-tiet-cong-dan.component.scss']
})
export class ChiTietCongDanComponent extends AppComponent implements OnInit {
  public congDan: NguoiDung;

  constructor(
    protected cuTruService: CutruService,
    protected utilitiesService: UtilityService,
    private congDanService: CongdanService,
    private route: ActivatedRoute
  ) {
    super(cuTruService, utilitiesService);
    utilitiesService.setDisplayHeader(true);
    utilitiesService.setDisplayFooter(false);
  }

  ngOnInit() {
    this.callAPI_GetNguoiDungById();
  }

  private callAPI_GetNguoiDungById() {
    const congDanId = this.route.snapshot.paramMap['id'];
    this.congDanService.getNguoiDungById(congDanId, result => {
      this.congDan = result;
    });
  }
}
