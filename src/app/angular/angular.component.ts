import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularService } from '../angular.service';


@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {
  booksAngular : any;

  constructor(private angularService : AngularService) { }

  ngOnInit() {
    this.angularService.getAgularBooks()
    .subscribe(data => {                         
            console.log(data);
            this.booksAngular = data;
          }
    ) 
  }

  goToDescription(){
  	return;
  }

}
