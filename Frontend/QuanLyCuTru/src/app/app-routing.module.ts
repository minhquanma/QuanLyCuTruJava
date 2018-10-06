import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { HomeComponent } from './pages/home/home.component';
import { CutruComponent } from './pages/cutru/cutru.component';
import { DangKyCuTruComponent } from './pages/dang-ky-cu-tru/dang-ky-cu-tru.component';
import { CongDanComponent } from './pages/cong-dan/cong-dan.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cutru', component: CutruComponent },
  { path: 'dangkycutru', component: DangKyCuTruComponent },
  { path: 'congdan', component: CongDanComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
