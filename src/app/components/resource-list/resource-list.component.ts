import { Component, Input } from '@angular/core';
import { Resource } from '../../models/resource.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-resource-list',
  imports: [RouterModule],
  template: `
    <div class="row">
      <div class="col-md-4 mb-4" *ngFor="let resource of resources">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ resource.title }}</h5>
            <p class="card-text">{{ resource.description }}</p>
            <span class="badge bg-primary">{{ resource.category }}</span>
            <div class="mt-2">
              <button class="btn btn-primary" [routerLink]="['/resource', resource.id]">View Details</button>
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
}