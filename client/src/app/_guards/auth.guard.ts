import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map, Observable } from 'rxjs';
import { AccountService } from '../_services/account.service';

//injectable decorator provide service root
@Injectable({
  providedIn: 'root',
})
//interface CanActivate provide the guard conditions that need to continue the process
export class AuthGuard implements CanActivate {
  constructor(
    private accountService: AccountService,
    private toast: ToastrService
  ) {}

  canActivate(): Observable<boolean> {
    return this.accountService.currentUser$.pipe(
      map((user) => {
        if (user) return true;
        else {
          this.toast.error('You shall not pass');
          return false;
        }
      })
    );
  }
}
