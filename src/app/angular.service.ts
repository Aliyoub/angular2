import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AngularService {

  	constructor(private http: Http) { }

	
	getAgularBooks(){
		// On retourne le résultat au composant qui gère le "subscribe"
		return this.http.get("https://www.googleapis.com/books/v1/volumes?q=angular")
		.map(res => res.json())
	}	

}
