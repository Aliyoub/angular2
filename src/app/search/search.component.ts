import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { SearchService } from '../search.service';
import { AngularService } from '../angular.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  booksInfos : any;
  booksAngular : any;
  dataForm	: any;

  constructor(private searchService : SearchService) { }

  ngOnInit() {
  }

  onSearch(){
  	this.searchService.Search(this.dataForm)
    .subscribe(data => {                         
            console.log(data);
            this.booksInfos = data;
          }
    )  	
  }   

}
