import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { allIcons, NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { ToastrModule } from 'ngx-toastr';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    NgxBootstrapIconsModule.pick(allIcons),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
  ],
  exports: [BsDropdownModule, ToastrModule, NgxBootstrapIconsModule],
})
export class SharedModule {}
