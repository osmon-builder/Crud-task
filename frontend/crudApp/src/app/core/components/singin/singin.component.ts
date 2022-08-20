import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private router: Router,
    private snackBar: MatSnackBar,
    ) { }

  ngOnInit(): void {
  }

    singIn(){
      this.authService.signIn(this.user)
        .subscribe(
          (res:any) => {
              localStorage.setItem('token', res.token);
            this.sendSnackBar('Usuario autenticado', false);
            this.router.navigate(['/tasks'])    
          }, error => {
            this.sendSnackBar('Datos de autenticacion invalidos', true);
          }
          )
        };
  
    sendSnackBar(message: string, error: any){
      this.snackBar.open(message, error ? 'Fallo' : 'Exitoso', { duration: 2000 });
    }
}
