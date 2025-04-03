import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Resource } from '../../models/resource.model';
import { ResourceService } from '../../services/resource.service';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-resource-details',
  imports: [BrowserModule],
  template: `
    <div class="container" *ngIf="resource">
      <div class="card">
        <div class="card-header">
          <h2>{{ resource.title }}</h2>
        </div>
        <div class="card-body">
          <p class="card-text">{{ resource.description }}</p>
          <div class="mb-3">
            <strong>Category:</strong> {{ resource.category }}
          </div>
          <div class="mb-3">
            <strong>URL:</strong> <a [href]="resource.url" target="_blank">{{ resource.url }}</a>
          </div>
          <div class="mb-3">
            <strong>Author:</strong> {{ resource.author }}
          </div>
          <div class="mb-3">
            <strong>Publication Date:</strong> {{ resource.publicationDate | date }}
          </div>
          <button class="btn btn-secondary" routerLink="/home">Back to List</button>
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
    private resourceService: ResourceService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.resource = this.resourceService.getResourceById(id);
    });
  }
}