import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const newRequset=req.clone({
 headers:new HttpHeaders({
    Authorization: 'ACCESS_TOKEN From interceptor' 
  })
  });
  return next(newRequset);
};
