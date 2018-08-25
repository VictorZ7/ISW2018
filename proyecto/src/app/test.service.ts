import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class TestService {

  constructor(private http: Http) {}

  //Metodo que rutea desde /api/metodo_a_usar?where;

  getclave(username: string,pass: string){
    let url = `/api/mostrar_clave?nombre=${username}&clave=${pass}`;
    return this.http.get(url).map(res => res.json());
  }

  insertMantencion( username: string,title: string ,pass: string){
    let url = `/api/insertar_orden?id=${username}&titulo=${title}&detalle=${pass}`;
    return this.http.get(url).map(res => res.json());
  }

  getordenesall(){
    let url = `/api/mostrar_ordenes_all`;
    return this.http.get(url).map(res => res.json());
  }

  getordenes(username: string){
    let url = `/api/mostrar_ordenes?usuario=${username}`;
    return this.http.get(url).map(res => res.json());
  }


}
