import 'rxjs/add/operator/map'
import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  data = {title: "", detail: "", stock: ""}


  constructor(private router: Router,private testService : TestService ) {}

  ngOnInit() {
    console.log(localStorage.getItem("currenttype"));
    if (localStorage.getItem("currenttype")=="1"){
      //do nothing
    }
    if (localStorage.getItem("currenttype")=="2"){
      this.router.navigate(['administrador']);
    }
    if (localStorage.getItem("currenttype")=="3"){
      this.router.navigate(['Bodeguero']);
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
    this.testService.insertMantencion(localStorage.getItem("currentUser"),title,detail)
        .subscribe(result => {
          this.router.navigate(['servicios']);
          alert("Material Ingresado")
        });

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
