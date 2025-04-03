import { Component, OnInit } from '@angular/core';
import { Resource } from '../../models/resource.model';
import { ResourceService } from '../../services/resource.service';
import { ResourceListComponent } from "../resource-list/resource-list.component";

@Component({
  selector: 'app-home',
  template: `
    <div class="container">
      <h2 class="mb-4">Featured Resources</h2>
      <app-resource-list [resources]="featuredResources"></app-resource-list>
    </div>
  `,
  styles: [],
  imports: [ResourceListComponent]
})
export class HomeComponent implements OnInit {
  featuredResources: Resource[] = [];

  constructor(private resourceService: ResourceService) {}

  ngOnInit(): void {
    this.featuredResources = this.resourceService.getFeaturedResources();
  }
}