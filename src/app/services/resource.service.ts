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
      const normalizedCategory = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
      const filtered = this.resources.value.filter(
        resource => resource.category === normalizedCategory
      );
      observer.next(filtered);
      observer.complete();
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