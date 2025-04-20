import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ResourceCategoryComponent } from './components/resource-category/resource-category.component';
import { AboutComponent } from './components/about/about.component';
import { AddResourceFormComponent } from './components/add-resource-form/add-resource-form.component';
import { ResourceDetailsComponent } from './components/resource-details/resource-details.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'categories/:category', component: ResourceCategoryComponent },
  { path: 'about', component: AboutComponent },
  { path: 'add-resource', component: AddResourceFormComponent },
  { path: 'resource/:id', component: ResourceDetailsComponent },
];
