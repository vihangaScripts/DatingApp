import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { allIcons, NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { ToastrModule } from 'ngx-toastr';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    NgxBootstrapIconsModule.pick(allIcons),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
    NgxGalleryModule,
    NgxSpinnerModule.forRoot({
      type: 'line-spin-fade',
    }),
  ],
  exports: [
    BsDropdownModule,
    ToastrModule,
    NgxBootstrapIconsModule,
    TabsModule,
    NgxGalleryModule,
    NgxSpinnerModule,
  ],
})
export class SharedModule {}
