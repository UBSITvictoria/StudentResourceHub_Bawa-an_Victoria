import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Resource, SAMPLE_RESOURCES } from '../models/resource.model';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  private resources = new BehaviorSubject<Resource[]>(SAMPLE_RESOURCES);

  getResources(): Observable<Resource[]> {
    return this.resources.asObservable();
  }

  getResourcesByCategory(category: string): Observable<Resource[]> {
    return new Observable(observer => {
      try {
        // Convert input to proper case (first letter uppercase, rest lowercase)
        const normalizedCategory = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
        
        // Ensure the category is valid
        const validCategories: Resource['category'][] = ['Programming', 'Design', 'Math'];
        if (!validCategories.includes(normalizedCategory as Resource['category'])) {
          console.warn(`Invalid category: ${category}`);
          observer.next([]);
          observer.complete();
          return;
        }

        // Get current resources
        const currentResources = this.resources.value;
        
        // Filter resources by exact category match
        const filtered = currentResources.filter(
          resource => resource.category === normalizedCategory
        );
        
        console.log(`Filtered ${filtered.length} resources for category: ${normalizedCategory}`);
        observer.next(filtered);
        observer.complete();
      } catch (error) {
        console.error('Error filtering resources by category:', error);
        observer.next([]);
        observer.complete();
      }
    });
  }

  addResource(resource: Omit<Resource, 'id'>): void {
    const newResource = {
      ...resource,
      id: this.getNextId(),
      publicationDate: new Date(),
      isFeatured: false
    };
    this.resources.next([...this.resources.value, newResource]);
  }

  getResourceById(id: number): Resource | undefined {
    return this.resources.value.find(resource => resource.id === id);
  }

  getFeaturedResources(): Resource[] {
    return this.resources.value.filter(resource => resource.isFeatured);
  }

  private getNextId(): number {
    return Math.max(...this.resources.value.map(r => r.id), 0) + 1;
  }
}