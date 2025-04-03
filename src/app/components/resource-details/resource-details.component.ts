import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Resource } from '../../models/resource.model';
import { ResourceService } from '../../services/resource.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resource-details',
  imports: [CommonModule],
  template: `
    <div class="container" *ngIf="resource">
      <div class="card">
        <div class="card-header">
          <h2>{{ resource.title }}</h2>
        </div>
        <div class="card-body">
          <h5>Full Description</h5>
          <p>{{ resource.description }}</p>
          
          <h5>Category</h5>
          <p><span class="badge bg-info">{{ resource.category }}</span></p>
          
          <h5>URL</h5>
          <p><a [href]="resource.url" target="_blank">{{ resource.url }}</a></p>
          
          <h5>Author</h5>
          <p>{{ resource.author }}</p>
          
          <h5>Publication Date</h5>
          <p>{{ resource.publicationDate | date }}</p>
          
          <button class="btn btn-secondary" (click)="goBack()">Back to List</button>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ResourceDetailsComponent implements OnInit {
  resource: Resource | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private resourceService: ResourceService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.resource = this.resourceService.getResourceById(id);
      if (!this.resource) {
        this.router.navigate(['/home']);
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/home']);
  }
}
