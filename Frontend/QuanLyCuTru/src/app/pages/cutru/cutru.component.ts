import { Component, OnInit } from '@angular/core';
import { CutruService } from '../../services/cutru.service';
import { UtilityService } from '../../services/utility.service';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-cutru',
  templateUrl: './cutru.component.html',
  styleUrls: ['./cutru.component.scss']
})
export class CutruComponent extends AppComponent implements OnInit {
  constructor(
    protected cuTruService: CutruService,
    protected utilitiesService: UtilityService
  ) {
    super(cuTruService, utilitiesService);
    utilitiesService.setDisplayHeader(true);
    utilitiesService.setDisplayFooter(false);
  }

  ngOnInit() {}
}
