import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ResourceService } from '../../services/resource.service';
import { Resource } from '../../models/resource.model';
import { ResourceListComponent } from '../resource-list/resource-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, ResourceListComponent],
  template: `
    <div class="container mx-auto px-4 py-8">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">Welcome to Student Resource Hub</h1>
        <p class="text-xl text-gray-600">Discover educational resources for Programming, Design, and Math</p>
      </div>

      <div>
        <h2 class="text-2xl font-bold text-gray-800 mb-6">Featured Resources</h2>
        <app-resource-list [resources]="featuredResources"></app-resource-list>
      </div>
    </div>
  `
})
export class HomeComponent implements OnInit {
  featuredResources: Resource[] = [];

  constructor(private resourceService: ResourceService) {}

  ngOnInit(): void {
    this.featuredResources = this.resourceService.getFeaturedResources();
  }
}