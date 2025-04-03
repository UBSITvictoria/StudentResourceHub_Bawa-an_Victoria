import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Resource } from '../../models/resource.model';
import { ResourceService } from '../../services/resource.service';
import { ResourceListComponent } from '../resource-list/resource-list.component';

@Component({
  selector: 'app-resource-category',
  imports: [ResourceListComponent],
  template: `
    <div class="container">
      <h2>{{ category }} Resources</h2>
      <p>Browse resources related to {{ category }}</p>
      <app-resource-list [resources]="resources"></app-resource-list>
    </div>
  `,
  styles: []
})
export class ResourceCategoryComponent implements OnInit {
  category: string = '';
  resources: Resource[] = [];

  constructor(
    private route: ActivatedRoute,
    private resourceService: ResourceService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.category = params['category'];
      this.resourceService.getResourcesByCategory(this.category).subscribe(resources => {
        this.resources = resources;
      });
    });
  }
}
