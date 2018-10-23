import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingComponent } from './pages/landing/landing.component';
import { DropdownDirective } from './components/header/dropdown.directive';
import { CutruComponent } from './pages/cutru/cutru.component';
import { DangKyCuTruComponent } from './pages/dang-ky-cu-tru/dang-ky-cu-tru.component';
import { TrangThaiPipe } from './pipes/trang-thai.pipe';
import { LoaiCuTruPipe } from './pipes/loai-cu-tru.pipe';
import { CongDanComponent } from './pages/cong-dan/cong-dan.component';
import { GioiTinhPipe } from './pipes/gioi-tinh.pipe';
import { ChiTietCongDanComponent } from './pages/chi-tiet-cong-dan/chi-tiet-cong-dan.component';
import { TrangchuComponent } from './pages/trangchu/trangchu.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    DropdownDirective,
    CutruComponent,
    DangKyCuTruComponent,
    TrangThaiPipe,
    LoaiCuTruPipe,
    CongDanComponent,
    GioiTinhPipe,
    ChiTietCongDanComponent,
    TrangchuComponent,
    DatepickerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
