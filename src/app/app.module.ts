import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ResourceListComponent } from './components/resource-list/resource-list.component';
import { ResourceDetailsComponent } from './components/resource-details/resource-details.component';
import { ResourceCategoryComponent } from './components/resource-category/resource-category.component';
import { AddResourceComponent } from './components/add-resource/add-resource.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,AppComponent,
    HeaderComponent,
    FooterComponent,
    ResourceListComponent,
    ResourceDetailsComponent,
    ResourceCategoryComponent,
    AddResourceComponent,
    HomeComponent,
    AboutComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
