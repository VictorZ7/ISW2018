import 'rxjs/add/operator/map'
import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  data = {title: "", detail: ""}


  constructor(private router: Router,private testService : TestService ) {}

  ngOnInit() {
    if (localStorage.getItem("currenttype")=="2"){
      //do nothing
    }
    if (localStorage.getItem("currenttype")=="1"){
      this.router.navigate(['about']);
    }
    if (localStorage.getItem("currenttype")=="3"){
      this.router.navigate(['tecnico']);
    }
    if (localStorage.getItem("currenttype")=="4"){
      this.router.navigate(['supervisor']);
    }
    if (localStorage.getItem("currenttype")=="0"){
      this.router.navigate(['login']);
    }
  }

  onSubmit(){

    let title = this.data.title;
    let detail = this.data.detail;
    /*this.testService.insertMantencion(localStorage.getItem("currentUser"),title,detail)
        .subscribe(result => {
          this.router.navigate(['servicios']);
        });*/
    alert("La modificacion fue realizada")
  }

  logout(){
    localStorage.setItem('currenttype',"0");
  }

  texto = "";

  alerting(){
	  alert("Ingresado");
  }
  mostrar(){
	  alert("Mostrar presupuesto");
  }

}
