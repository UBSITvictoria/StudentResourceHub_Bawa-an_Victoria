import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ResourceCategoryComponent } from './components/resource-category/resource-category.component';
import { ResourceDetailsComponent } from './components/resource-details/resource-details.component';
import { AddResourceComponent } from './components/add-resource/add-resource.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'categories/:category', component: ResourceCategoryComponent },
  { path: 'resource/:id', component: ResourceDetailsComponent },
  { path: 'add-resource', component: AddResourceComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// models/resource.model.ts
export interface Resource {
  id: number;
  title: string;
  description: string;
  category: 'Programming' | 'Design' | 'Math';
  url: string;
  author: string;
  publicationDate: Date;
  isFeatured: boolean;
}
