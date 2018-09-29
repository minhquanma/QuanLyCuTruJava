import { Component, OnInit } from "@angular/core";
import { AppComponent } from "../../app.component";
import { CutruService } from "../../services/cutru.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent extends AppComponent implements OnInit {
  constructor(protected cuTruService: CutruService) {
    super(cuTruService);
  }

  ngOnInit() {}
}
