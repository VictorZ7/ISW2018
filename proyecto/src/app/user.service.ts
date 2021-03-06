import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

	constructor(private http: Http) {}

	getUsers() {
		return this.http.get('/api');
	}

}
