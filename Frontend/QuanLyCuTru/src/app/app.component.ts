import { Component } from '@angular/core';
import { CuTru } from '../models/customizes/cutru';
import { CutruService } from '../services/cutru.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cuTrus: CuTru[];
  constructor(private cuTruService: CutruService) {
    cuTruService.getAll().subscribe((data: CuTru[]) => {
      this.cuTrus = data;
      console.log(data);
    });
  }
}
