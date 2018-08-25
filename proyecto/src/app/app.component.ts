import 'rxjs/add/operator/map'
import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';
	results=[];
  rows : any = [];
  nombre : any = "";
  clave : any = "";


	constructor(private testService: TestService ){}

	ngOnInit() {
    
	}



  /*getpass(){
    this.testService.getclave(this.nombre,this.clave).subscribe(rows => {
      this.rows = rows;
    });
  }



  insertman() {
	  this.testService.insertMantencion(this.nombre,this.clave)
	  .map(res => res.json())
	  .subscribe(results => this.results = results);
  }*/

}
