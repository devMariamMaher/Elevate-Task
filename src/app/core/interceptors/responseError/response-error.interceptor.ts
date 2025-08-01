import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';

export const responseErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const _ToastrService = inject(ToastrService);

  return next(req).pipe(
    catchError((err)=>{
      _ToastrService.error(err.message, '', {
        positionClass: 'toastPosition',
        timeOut: 2000
      })

      return throwError(()=>err);
    })
  );
};
