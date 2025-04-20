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
      const filtered = this.resources.value.filter(resource => resource.category === category);
      observer.next(filtered);
      observer.complete();
    });
  }

  addResource(resource: Omit<Resource, 'id'>): void {
    const newResource = {
      ...resource,
      id: this.resources.value.length + 1
    };
    this.resources.next([...this.resources.value, newResource]);
  }

  getResourceById(id: number): Resource | undefined {
    return this.resources.value.find(resource => resource.id === id);
  }

  getFeaturedResources(): Resource[] {
    return this.resources.value.filter(resource => resource.isFeatured);
  }
}