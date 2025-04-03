import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { Resource } from '../../models/resource.model';
import { ResourceService } from '../../services/resource.service';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-add-resource',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="container">
      <h2>Add New Resource</h2>
      <form (ngSubmit)="onSubmit()" #resourceForm="ngForm">
        <div class="mb-3">
          <label for="title" class="form-label">Title</label>
          <input type="text" class="form-control" id="title" name="title" 
                 [(ngModel)]="newResource.title" required>
        </div>
        
        <div class="mb-3">
          <label for="description" class="form-label">Description</label>
          <textarea class="form-control" id="description" name="description" rows="3"
                   [(ngModel)]="newResource.description" required></textarea>
        </div>
        
        <div class="mb-3">
          <label for="url" class="form-label">URL</label>
          <input type="url" class="form-control" id="url" name="url" 
                 [(ngModel)]="newResource.url" required>
        </div>
        
        <div class="mb-3">
          <label for="category" class="form-label">Category</label>
          <select class="form-select" id="category" name="category" 
                  [(ngModel)]="newResource.category" required>
            <option value="Programming">Programming</option>
            <option value="Design">Design</option>
            <option value="Math">Math</option>
          </select>
        </div>
        
        <div class="mb-3">
          <label for="author" class="form-label">Author</label>
          <input type="text" class="form-control" id="author" name="author" 
                 [(ngModel)]="newResource.author" required>
        </div>
        
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="isFeatured" name="isFeatured" 
                 [(ngModel)]="newResource.isFeatured">
          <label class="form-check-label" for="isFeatured">Feature this resource</label>
        </div>
        
        <button type="submit" class="btn btn-primary" [disabled]="!resourceForm.form.valid">Submit</button>
        <button type="button" class="btn btn-secondary ms-2" (click)="onCancel()">Cancel</button>
      </form>
    </div>
  `,
  styles: []
})
export class AddResourceComponent {
  newResource: Resource = {
    id: 0,
    title: '',
    description: '',
    category: 'Programming',
    url: '',
    author: '',
    publicationDate: new Date(),
    isFeatured: false
  };

  constructor(
    private resourceService: ResourceService,
    private router: Router
  ) {}

  onSubmit(): void {
    this.resourceService.addResource({...this.newResource});
    this.router.navigate(['/home']);
  }

  onCancel(): void {
    this.router.navigate(['/home']);
  }
}
