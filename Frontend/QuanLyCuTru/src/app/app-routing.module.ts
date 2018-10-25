import { ChiTietCuTruComponent } from './pages/chi-tiet-cu-tru/chi-tiet-cu-tru.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { CutruComponent } from './pages/cutru/cutru.component';
import { DangKyCuTruComponent } from './pages/dang-ky-cu-tru/dang-ky-cu-tru.component';
import { CongDanComponent } from './pages/cong-dan/cong-dan.component';
import { TrangchuComponent } from './pages/trangchu/trangchu.component';
import { ChiTietCongDanComponent } from './pages/chi-tiet-cong-dan/chi-tiet-cong-dan.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'trangchu', component: TrangchuComponent },
  { path: 'cutru', component: CutruComponent },
  { path: 'dangkycutru', component: DangKyCuTruComponent },
  { path: 'congdan', component: CongDanComponent },
  { path: 'chitietcongdan/:id', component: ChiTietCongDanComponent },
  { path: 'dangkycutru', component: DangKyCuTruComponent },
  { path: 'chitietcutru/:id', component: ChiTietCuTruComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
