import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Resource } from '../../models/resource.model';
import { ResourceService } from '../../services/resource.service';
import { ResourceListComponent } from "../resource-list/resource-list.component";

@Component({
  selector: 'app-resource-category',
  template: `
    <div class="container">
      <h2 class="mb-4">{{ category }} Resources</h2>
      <p>Resources related to {{ category.toLowerCase() }} topics.</p>
      
      <app-resource-list [resources]="categoryResources"></app-resource-list>
      
      <div *ngIf="categoryResources.length === 0" class="alert alert-info mt-3">
        No resources found in this category.
      </div>
    </div>
  `,
  styles: [],
  imports: [ResourceListComponent]
})
export class ResourceCategoryComponent implements OnInit {
  category: string = '';
  categoryResources: Resource[] = [];

  constructor(
    private route: ActivatedRoute,
    private resourceService: ResourceService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.category = params.get('category') || '';
      this.categoryResources = this.resourceService.getResourcesByCategory(this.category);
    });
  }
}