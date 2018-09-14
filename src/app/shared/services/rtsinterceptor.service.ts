import { Injectable } from '@angular/core';
import { HttpInterceptor,HttpRequest,HttpHandler,HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RTSInterceptorService {

  intercept(request:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{

    request=request.clone({ setHeaders:{
      "UserID":"2",
      "apikey":"123",
      "userkey":"apple",
      "consumerkey":"mango"
    
    }});
        return next.handle(request);
      }
    

}
