import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss']
})
export class SinginComponent implements OnInit {
  
  user = {
    name: '',
    email: '',
    password: '',
  }
    
  constructor( 
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

    singIn(){
      this.authService.signIn(this.user)
        .subscribe(
          (res:any) => {
            console.log(res);
            localStorage.setItem('token', res.token);
            this.router.navigate(['/tasks']);
          }
        )
    }
}
