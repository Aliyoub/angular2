import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SearchService } from './search.service';
import { AngularService } from './angular.service';
import { AngularComponent } from './angular/angular.component';
import { PresentationComponent } from './presentation/presentation.component';
import { DescriptionComponent } from './description/description.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'description', component: DescriptionComponent }
  { path: '', redirectTo: './', pathMatch : 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AngularComponent,
    PresentationComponent,
    DescriptionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SearchService, AngularService],
  bootstrap: [AppComponent]
})
export class AppModule { }
