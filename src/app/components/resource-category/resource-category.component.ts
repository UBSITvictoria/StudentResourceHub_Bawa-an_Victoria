import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ResourceService } from '../../services/resource.service';
import { Resource } from '../../models/resource.model';
import { ResourceListComponent } from '../resource-list/resource-list.component';

@Component({
  selector: 'app-resource-category',
  standalone: true,
  imports: [CommonModule, ResourceListComponent],
  template: `
    <div class="container mx-auto px-4 py-8">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">{{ categoryTitle }}</h2>
      <app-resource-list [resources]="categoryResources"></app-resource-list>
      <div *ngIf="categoryResources.length === 0" class="text-center py-8">
        <p class="text-gray-600">No resources found in this category.</p>
      </div>
    </div>
  `
})
export class ResourceCategoryComponent implements OnInit {
  categoryResources: Resource[] = [];
  categoryTitle: string = '';

  constructor(
    private route: ActivatedRoute,
    private resourceService: ResourceService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const category = params['category'];
      this.categoryTitle = this.formatCategoryTitle(category);
      
      this.resourceService.getResourcesByCategory(category).subscribe(
        resources => {
          this.categoryResources = resources;
        }
      );
    });
  }

  private formatCategoryTitle(category: string): string {
    return category.charAt(0).toUpperCase() + category.slice(1) + ' Resources';
  }
}