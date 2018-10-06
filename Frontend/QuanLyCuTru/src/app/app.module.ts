import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LandingComponent } from './pages/landing/landing.component';
import { DropdownDirective } from './components/header/dropdown.directive';
import { CutruComponent } from './pages/cutru/cutru.component';
import { DangKyCuTruComponent } from './pages/dang-ky-cu-tru/dang-ky-cu-tru.component';
import { TrangThaiPipe } from './pipes/trang-thai.pipe';
import { LoaiCuTruPipe } from './pipes/loai-cu-tru.pipe';
import { CongDanComponent } from './pages/cong-dan/cong-dan.component';
import { GioiTinhPipe } from './pipes/gioi-tinh.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LandingComponent,
    DropdownDirective,
    CutruComponent,
    DangKyCuTruComponent,
    TrangThaiPipe,
    LoaiCuTruPipe,
    CongDanComponent,
    GioiTinhPipe
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
