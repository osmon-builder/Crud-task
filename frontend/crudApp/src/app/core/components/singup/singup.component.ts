import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private router: Router,
    private snackBar: MatSnackBar,
    ) { }

  ngOnInit(): void {
  }

  singUp(){
    this.authService.signUp(this.user)
      .subscribe(
        (res:any) => {
          res
          if (res.status == 200){
            localStorage.setItem('token', res.token);
           
          }  
          this.sendSnackBar('El usuario se ha creado correctamente', false);
          this.router.navigate(['/singin'])    
        }, error => {
          this.sendSnackBar('Error al crear un usuario', true);
        }
        )
      };

  sendSnackBar(message: string, error: any){
    this.snackBar.open(message, error ? 'Fallo' : 'Exitoso', { duration: 2000 });
  }

}
