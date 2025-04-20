import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResourceService } from '../../services/resource.service';

@Component({
  selector: 'app-add-resource',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="container mx-auto px-4 py-8">
      <div class="max-w-2xl mx-auto">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">Add New Resource</h2>
        
        <form [formGroup]="resourceForm" (ngSubmit)="onSubmit()" class="space-y-6">
          <div>
            <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
            <input type="text" id="title" formControlName="title"
                   class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
            <div *ngIf="resourceForm.get('title')?.touched && resourceForm.get('title')?.invalid"
                 class="text-red-500 text-sm mt-1">
              Title is required
            </div>
          </div>

          <div>
            <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
            <textarea id="description" formControlName="description" rows="4"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
            <div *ngIf="resourceForm.get('description')?.touched && resourceForm.get('description')?.invalid"
                 class="text-red-500 text-sm mt-1">
              Description is required
            </div>
          </div>

          <div>
            <label for="category" class="block text-sm font-medium text-gray-700">Category</label>
            <select id="category" formControlName="category"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
              <option value="">Select a category</option>
              <option value="Programming">Programming</option>
              <option value="Design">Design</option>
              <option value="Math">Math</option>
            </select>
            <div *ngIf="resourceForm.get('category')?.touched && resourceForm.get('category')?.invalid"
                 class="text-red-500 text-sm mt-1">
              Category is required
            </div>
          </div>

          <div>
            <label for="url" class="block text-sm font-medium text-gray-700">URL</label>
            <input type="url" id="url" formControlName="url"
                   class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
            <div *ngIf="resourceForm.get('url')?.touched && resourceForm.get('url')?.invalid"
                 class="text-red-500 text-sm mt-1">
              Please enter a valid URL
            </div>
          </div>

          <div>
            <label for="author" class="block text-sm font-medium text-gray-700">Author</label>
            <input type="text" id="author" formControlName="author"
                   class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
            <div *ngIf="resourceForm.get('author')?.touched && resourceForm.get('author')?.invalid"
                 class="text-red-500 text-sm mt-1">
              Author is required
            </div>
          </div>

          <div class="flex justify-end space-x-4">
            <button type="button" (click)="onCancel()"
                    class="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              Cancel
            </button>
            <button type="submit" [disabled]="resourceForm.invalid"
                    class="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class AddResourceComponent {
  resourceForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private resourceService: ResourceService,
    private router: Router
  ) {
    this.resourceForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      url: ['', [Validators.required, Validators.pattern('https?://.*')]],
      author: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.resourceForm.valid) {
      const newResource = {
        ...this.resourceForm.value,
        publicationDate: new Date(),
        isFeatured: false
      };
      
      this.resourceService.addResource(newResource);
      this.router.navigate(['/']);
    }
  }

  onCancel(): void {
    this.router.navigate(['/']);
  }
} 