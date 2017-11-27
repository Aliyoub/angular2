import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SearchService {

  	constructor(private http: Http) { }

	
	Search(keyword : string){
		// On retourne le résultat au composant qui gère le "subscribe"
		return this.http.get("https://www.googleapis.com/books/v1/volumes?q="+keyword)
		.map(res => res.json())
	}	

}
