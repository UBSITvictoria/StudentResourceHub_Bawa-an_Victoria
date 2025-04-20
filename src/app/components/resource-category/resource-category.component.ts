import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ResourceService } from '../../services/resource.service';
import { Resource } from '../../models/resource.model';
import { ResourceListComponent } from '../resource-list/resource-list.component';
import { Subscription } from 'rxjs';

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
export class ResourceCategoryComponent implements OnInit, OnDestroy {
  categoryResources: Resource[] = [];
  categoryTitle: string = '';
  private subscriptions: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private resourceService: ResourceService
  ) {}

  ngOnInit(): void {
    // Subscribe to route changes
    const routeSub = this.route.paramMap.subscribe(params => {
      const category = params.get('category');
      if (category) {
        this.categoryTitle = this.formatCategoryTitle(category);
        this.loadResources(category);
      }
    });
    this.subscriptions.push(routeSub);
  }

  ngOnDestroy(): void {
    // Clean up all subscriptions
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  private loadResources(category: string): void {
    const resourceSub = this.resourceService.getResourcesByCategory(category).subscribe(
      resources => {
        this.categoryResources = resources;
      },
      error => {
        console.error('Error loading resources:', error);
        this.categoryResources = [];
      }
    );
    this.subscriptions.push(resourceSub);
  }

  private formatCategoryTitle(category: string): string {
    return category.charAt(0).toUpperCase() + category.slice(1) + ' Resources';
  }
}