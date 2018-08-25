import 'rxjs/add/operator/map'
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TestService } from '../test.service';


@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  datos : [{

          id: string,

          titulo : string,

          estado : string,

          fecha : string,

      }];

  constructor(private router: Router ,private testService : TestService) {}

  ngOnInit() {
    if (localStorage.getItem("currenttype")=="1"){
      //do nothing
    }
    if (localStorage.getItem("currenttype")=="2"){
      this.router.navigate(['administrador']);
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
    this.testService.getordenes(localStorage.getItem("currentUser"))
        .subscribe(result => {
            this.datos=result;
        });
  }

}
