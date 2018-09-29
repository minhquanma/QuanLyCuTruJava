import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { CutruService } from '../../services/cutru.service';
import { UtilitiesService } from '../../services/utilities.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends AppComponent implements OnInit {
  constructor(
    protected cuTruService: CutruService,
    protected utilitiesService: UtilitiesService
  ) {
    super(cuTruService, utilitiesService);
    utilitiesService.setDisplayHeader(true);
    utilitiesService.setDisplayFooter(false);
  }

  ngOnInit() {}
}
