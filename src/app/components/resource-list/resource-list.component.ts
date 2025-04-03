import { Component, Input, NgModule } from '@angular/core';
import { Resource } from '../../models/resource.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resource-list',
  imports: [CommonModule],
  template: `
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      <div class="col" *ngFor="let resource of resources">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">{{ resource.title }}</h5>
            <p class="card-text">{{ resource.description }}</p>
            <span class="badge bg-info mb-2">{{ resource.category }}</span>
            <div class="d-grid">
              <button class="btn btn-primary" (click)="viewDetails(resource.id)">View Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ResourceListComponent {
  @Input() resources: Resource[] = [];

  viewDetails(id: number): void {
    window.location.href = `/resource/${id}`;
  }
}