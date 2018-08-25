import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import {  Http } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

data = {name: "", pass: ""}

  constructor(private router: Router, private testService : TestService) { }

  ngOnInit() {


      console.log(localStorage.getItem('currenttype'));
      if(localStorage.getItem('currenttype')=="1"){
        this.router.navigate(['about']);
      }

      else if(localStorage.getItem('currenttype')=="2"){
        this.router.navigate(['administrador']);
      }

      else if(localStorage.getItem('currenttype')=="4"){
        this.router.navigate(['supervisor']);
      }

      else if(localStorage.getItem('currenttype')=="3"){
        this.router.navigate(['tecnico']);
      }

      else{
        localStorage.setItem('currentUser',"0");
        localStorage.setItem('currenttype',"0");
      }
   }

  onSubmit(){
    let name = this.data.name;
    let pass = this.data.pass;

    this.testService.getclave(name,pass)
        .subscribe(result => {
              if(result.nombre == name) {
                if(result.clave== pass){
                  localStorage.setItem('currentUser',result.id_usuario);
                  localStorage.setItem('currenttype',result.tipo);
                  if(result.tipo==1){
                    this.router.navigate(['about']);
                  }
                  if(result.tipo==2){
                    this.router.navigate(['administrador']);
                  }
                  if(result.tipo==3){
                    this.router.navigate(['tecnico']);
                  }
                  if(result.tipo==4){
                    this.router.navigate(['supervisor']);
                  }
              }
            }

        });


        }
    }
