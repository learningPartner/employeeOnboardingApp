import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    map((res:any)=> {
      
      return res;
    }),
    catchError((error) => {
      
      let message = 'An unknown error occurred.';

      if (error.status === 0) {
        message = 'Network error. Please check your connection.';
      } else if (error.status === 400) {
        message = 'Bad Request';
      } else if (error.status === 401) {
        message = 'Unauthorized';
      } else if (error.status === 404) {
        message = 'Resource Not Found';
      } else if (error.status === 500) {
        message = 'Internal Server Error';
      }
      alert(message)
      return throwError(() => error);
    })
  );
};
