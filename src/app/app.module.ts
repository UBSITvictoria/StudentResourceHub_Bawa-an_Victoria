import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ResourceListComponent } from './components/resource-list/resource-list.component';
import { ResourceDetailsComponent } from './components/resource-details/resource-details.component';
import { ResourceCategoryComponent } from './components/resource-category/resource-category.component';
import { AddResourceFormComponent } from './components/add-resource-form/add-resource-form.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    FormsModule,AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    ResourceListComponent,
    ResourceDetailsComponent,
    ResourceCategoryComponent,
    AddResourceFormComponent,
    HomeComponent,
    AboutComponent,
    RouterModule.forRoot(routes)
  ],
  providers: [AppComponent],
  // Removed bootstrap array as AppComponent is a standalone component
})
export class AppModule { }
