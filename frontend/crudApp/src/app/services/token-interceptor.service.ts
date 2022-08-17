import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  constructor(private authService: AuthService) { }

  intercept(req : any, next: any){
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `${this.authService.getToken()}`
      }
    });
    return next.handle(tokenizedReq);
  }
}
