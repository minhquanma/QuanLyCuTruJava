import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { CutruService } from '../../services/cutru.service';
import { UtilitiesService } from '../../services/utilities.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent extends AppComponent implements OnInit {
  constructor(
    protected cuTruService: CutruService,
    protected utilitiesService: UtilitiesService
  ) {
    super(cuTruService, utilitiesService);
    utilitiesService.setDisplayHeader(false);
    utilitiesService.setDisplayFooter(false);
  }

  ngOnInit() {}
}
