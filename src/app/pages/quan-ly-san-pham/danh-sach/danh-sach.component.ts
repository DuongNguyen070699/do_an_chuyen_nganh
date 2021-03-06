import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { ProductEntity } from 'app/shared/services/product/product.interface';
import { ProductService } from 'app/shared/services/product/product.service';
import { WorkshiftEntity } from 'app/shared/services/workshift/workshift.interface';
import { RequestQueryBuilder } from 'nest-crud-client';
import { DatatableAction, DatatableComponent, DatatableService } from 'ngn-datatable';

@Component({
  selector: 'ngx-danh-sach',
  templateUrl: './danh-sach.component.html',
  styleUrls: ['./danh-sach.component.scss'],
})
export class DanhSachComponent implements OnInit {
  tgLamViec: any;
  @ViewChild('table', { static: false })
  table: DatatableComponent<ProductEntity>;
  datatableService: DatatableService<ProductEntity> = {
    service: this.productService,
    primaryField: 'productId',
    builder: this.getBuilder.bind(this),
  };
  filterEntity: WorkshiftEntity = {
    workshift: undefined,
    userId: '',
  };
  actions: DatatableAction<WorkshiftEntity>[] = [
    { name: 'quick-edit' },
    { name: 'delete' },
  ];
  constructor(
    private productService: ProductService,
    private router: Router,
    protected route: ActivatedRoute,
  ) {
  }
  ngOnInit(): void {

  }
  loadDataTable() {
    this.table.loadData();
  }
  clickRowHandle($event: any) {
    if ($event.type === 'dblclick') {
      const id = ($event.row as ProductEntity).productId;
      this.router.navigate([`/pages/quan-ly-san-pham/chi-tiet/${id}`]);
    }
  }
  getBuilder(builder: RequestQueryBuilder) {
    builder.select(['anhMinhHoa', 'chuongTrinhKhuyenMai', 'danhMucSanPham', 'giaKhuyenMai', 'giaSanPham', 'moTa', 'soLuong', 'tenSanPham', 'nhaCungCap'] as Array<keyof ProductEntity>);
    // tslint:disable-next-line:max-line-length
    builder.setJoin({ field: 'danhMucSanPham' });
    builder.setJoin({ field: 'nhaCungCap' });

  }
}
