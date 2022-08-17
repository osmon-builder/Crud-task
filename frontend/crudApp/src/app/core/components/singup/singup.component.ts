import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {

  user = {
    name: '',
    email: '',
    password: '',
    confirm_password: ''
  };


  constructor( 
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  singUp(){
    this.authService.signUp(this.user)
      .subscribe(
        (res:any) => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this.router.navigate(['/singin']);
        }
      )
  }

}
