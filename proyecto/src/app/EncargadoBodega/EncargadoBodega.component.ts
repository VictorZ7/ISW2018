import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map'
import { TestService } from '../test.service';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-EncargadoBodega',
  templateUrl: './EncargadoBodega.component.html',
  styleUrls: ['./EncargadoBodega.component.css']
})
export class EncargadoBodegaComponent implements OnInit {


    datos : [{

            id: string,

            titulo : string,

            estado : string,

            fecha : string,

        }];

  constructor(private router: Router,private testService : TestService) { }

  ngOnInit() {
    if (localStorage.getItem("currenttype")=="4"){
      //do nothing
    }
    if (localStorage.getItem("currenttype")=="1"){
      this.router.navigate(['about']);
    }
    if (localStorage.getItem("currenttype")=="3"){
      this.router.navigate(['tecnico']);
    }
    if (localStorage.getItem("currenttype")=="2"){
      this.router.navigate(['administrador']);
    }
    if (localStorage.getItem("currenttype")=="0"){
      this.router.navigate(['login']);
    }
    this.testService.getordenesall()
        .subscribe(result => {
            this.datos=result;
        });
  }
  logout(){
    localStorage.setItem('currenttype',"0");
  }


}
