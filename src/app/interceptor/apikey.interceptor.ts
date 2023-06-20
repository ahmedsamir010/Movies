import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApikeyInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
let modifiedReq=request.clone({
  url:request.url.replace('api_key=','api_key=a2e39ca1b4ea24d8fdaccd50f952c05e')
})
    return next.handle(modifiedReq);
  }
}
