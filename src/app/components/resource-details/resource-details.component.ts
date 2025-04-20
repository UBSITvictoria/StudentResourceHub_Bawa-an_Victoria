import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { Resource } from '../../models/resource.model';
import { ResourceService } from '../../services/resource.service';

@Component({
  selector: 'app-resource-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container mx-auto px-4 py-8">
      <div class="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div class="p-8">
          <div class="flex items-center justify-between mb-6">
            <h1 class="text-3xl font-bold text-gray-900">{{ resource?.title }}</h1>
            <span class="px-4 py-2 text-sm rounded-full" 
                  [ngClass]="{
                    'bg-blue-100 text-blue-800': resource?.category === 'Programming',
                    'bg-purple-100 text-purple-800': resource?.category === 'Design',
                    'bg-green-100 text-green-800': resource?.category === 'Math'
                  }">
              {{ resource?.category }}
            </span>
          </div>

          <div class="prose max-w-none mb-6">
            <p class="text-gray-600">{{ resource?.description }}</p>
          </div>

          <div class="border-t border-gray-200 pt-6">
            <dl class="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
              <div>
                <dt class="text-sm font-medium text-gray-500">Author</dt>
                <dd class="mt-1 text-sm text-gray-900">{{ resource?.author }}</dd>
              </div>

              <div>
                <dt class="text-sm font-medium text-gray-500">Publication Date</dt>
                <dd class="mt-1 text-sm text-gray-900">{{ resource?.publicationDate | date:'longDate' }}</dd>
              </div>

              <div class="sm:col-span-2">
                <dt class="text-sm font-medium text-gray-500">Resource URL</dt>
                <dd class="mt-1 text-sm text-gray-900">
                  <a [href]="resource?.url" target="_blank" rel="noopener noreferrer" 
                     class="text-blue-600 hover:text-blue-800">
                    {{ resource?.url }}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div class="mt-8 flex justify-between items-center">
            <button (click)="goBack()" 
                    class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to List
            </button>

            <a [href]="resource?.url" target="_blank" rel="noopener noreferrer"
               class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
              Visit Resource
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class ResourceDetailsComponent implements OnInit {
  resource: Resource | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private resourceService: ResourceService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.resource = this.resourceService.getResourceById(id);
    
    if (!this.resource) {
      this.router.navigate(['/']);
    }
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
