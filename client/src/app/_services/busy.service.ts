import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root',
})
export class BusyService {
  busyRequestCount = 0;

  constructor(private spinnerService: NgxSpinnerService) {}

  //#18bc9c

  busy() {
    this.busyRequestCount++;
    this.spinnerService.show(undefined, {
      type: 'line-spin-fade',
      bdColor: 'rgba(255,255,255,0)',
      color: '#18bc9c',
    });
  }

  idle() {
    this.busyRequestCount--;
    if (this.busyRequestCount <= 0) {
      this.busyRequestCount = 0;
      this.spinnerService.hide();
    }
  }
}
