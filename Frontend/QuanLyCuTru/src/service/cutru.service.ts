import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CuTru } from "../model/cutru";
import { Observable, throwError } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CutruService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<CuTru[]> {
    return this.http.get<CuTru[]>("http://localhost:8090/quanlycutru");
  }
}
