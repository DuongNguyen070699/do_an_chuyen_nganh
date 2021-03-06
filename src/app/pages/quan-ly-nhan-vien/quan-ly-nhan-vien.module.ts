import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { QuanLyHieuSuatComponent } from './quan-ly-hieu-suat/quan-ly-hieu-suat.component';

@NgModule({
  declarations: [QuanLyHieuSuatComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        redirectTo: 'quan-ly-tai-khoan',
        pathMatch: 'full',
      },
      {
        path: 'quan-ly-tai-khoan',
        loadChildren: () =>
          import('./quan-ly-tai-khoan/quan-ly-tai-khoan.module').then(
            (m) => m.QuanLyTaiKhoanModule,
          ),
      },
      {
        path: 'quan-ly-ca-lam',
        loadChildren: () =>
          import('./quan-ly-ca-lam/quan-ly-ca-lam.module').then(
            (m) => m.QuanLyCaLamModule,
          ),
      },
      {
        path: 'quan-ly-hieu-suat',
        loadChildren: () =>
          import('./quan-ly-hieu-suat/quan-ly-hieu-suat.module').then(
            (m) => m.QuanLyHieuSuatModule,
          ),
      },
    ]),
  ],
})
export class QuanLyNhanVienModule { }
