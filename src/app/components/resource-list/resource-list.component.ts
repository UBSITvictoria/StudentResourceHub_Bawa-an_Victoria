import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Resource } from '../../models/resource.model';
import { ResourceService } from '../../services/resource.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-resource-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container mx-auto px-4 py-8">
      <div *ngIf="loading" class="text-center py-8">
        <p class="text-gray-600">Loading resources...</p>
      </div>
      
      <div *ngIf="!loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div *ngFor="let resource of displayedResources" 
             class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div class="p-6">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-xl font-semibold text-gray-800">{{ resource.title }}</h3>
              <span class="px-3 py-1 text-sm rounded-full" 
                    [ngClass]="{
                      'bg-blue-100 text-blue-800': resource.category === 'Programming',
                      'bg-purple-100 text-purple-800': resource.category === 'Design',
                      'bg-green-100 text-green-800': resource.category === 'Math'
                    }">
                {{ resource.category }}
              </span>
            </div>
            
            <p class="text-gray-600 mb-4">{{ resource.description }}</p>
            
            <div class="flex items-center justify-between text-sm text-gray-500">
              <span>By {{ resource.author }}</span>
              <span>{{ resource.publicationDate | date:'mediumDate' }}</span>
            </div>
            
            <div class="mt-4 flex justify-between items-center">
              <a [routerLink]="['/resource', resource.id]" 
                 class="text-blue-600 hover:text-blue-800 font-medium">
                View Details
              </a>
              <a [href]="resource.url" target="_blank" rel="noopener noreferrer"
                 class="text-gray-600 hover:text-gray-800">
                Visit Resource
              </a>
            </div>
          </div>
        </div>
      </div>

      <div *ngIf="!loading && displayedResources.length === 0" class="text-center py-8">
        <p class="text-gray-600">No resources found.</p>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class ResourceListComponent implements OnInit, OnDestroy {
  @Input() resources?: Resource[];
  displayedResources: Resource[] = [];
  loading = true;
  private routeSubscription?: Subscription;
  private resourceSubscription?: Subscription;

  constructor(
    private resourceService: ResourceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (this.resources) {
      this.displayedResources = this.resources;
      this.loading = false;
    } else {
      this.routeSubscription = this.route.params.subscribe(params => {
        if (params['category']) {
          this.resourceSubscription = this.resourceService.getResourcesByCategory(params['category']).subscribe(
            resources => {
              this.displayedResources = resources;
              this.loading = false;
            }
          );
        } else {
          this.resourceSubscription = this.resourceService.getResources().subscribe(
            resources => {
              this.displayedResources = resources;
              this.loading = false;
            }
          );
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
    this.resourceSubscription?.unsubscribe();
  }
}