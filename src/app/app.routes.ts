import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ResourceListComponent } from './components/resource-list/resource-list.component';
import { ResourceDetailsComponent } from './components/resource-details/resource-details.component';
import { AddResourceComponent } from './components/add-resource/add-resource.component';
import { ResourceCategoryComponent } from './components/resource-category/resource-category.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent 
  },
  { 
    path: 'resources', 
    component: ResourceListComponent 
  },
  { 
    path: 'resource/:id', 
    component: ResourceDetailsComponent 
  },
  { 
    path: 'add-resource', 
    component: AddResourceComponent 
  },
  { 
    path: 'categories/:category', 
    component: ResourceCategoryComponent 
  },
  {
    path: 'about',
    component: AboutComponent
  },
  { 
    path: '**', 
    redirectTo: '' 
  }
];
