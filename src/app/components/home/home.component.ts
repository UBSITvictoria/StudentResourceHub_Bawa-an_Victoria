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

      <div class="mb-12">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">Featured Resources</h2>
        <app-resource-list [resources]="featuredResources"></app-resource-list>
      </div>

      <div class="text-center">
        <a routerLink="/add-resource" 
           class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
          Share Your Resource
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
        </a>
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