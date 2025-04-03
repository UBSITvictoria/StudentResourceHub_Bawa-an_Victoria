import { Injectable } from '@angular/core';
import { Resource } from '../models/resource.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  private resources: Resource[] = [
    {
      id: 1,
      title: 'Introduction to JavaScript',
      description: 'A beginner-friendly guide to JavaScript programming',
      category: 'Programming',
      url: 'https://example.com/js-intro',
      author: 'John Smith',
      publicationDate: new Date('2023-05-15'),
      isFeatured: true
    },
    {
      id: 2,
      title: 'Angular Fundamentals',
      description: 'Learn the basics of Angular framework',
      category: 'Programming',
      url: 'https://example.com/angular-basics',
      author: 'Jane Doe',
      publicationDate: new Date('2023-06-20'),
      isFeatured: true
    },
    {
      id: 3,
      title: 'UI/UX Best Practices',
      description: 'Guide to creating effective user interfaces',
      category: 'Design',
      url: 'https://example.com/ui-ux-practices',
      author: 'Alex Johnson',
      publicationDate: new Date('2023-07-10'),
      isFeatured: false
    },
    {
      id: 4,
      title: 'Calculus for Beginners',
      description: 'An easy introduction to calculus concepts',
      category: 'Math',
      url: 'https://example.com/calculus-intro',
      author: 'Maria Garcia',
      publicationDate: new Date('2023-08-05'),
      isFeatured: false
    }
  ];

  private resourcesSubject = new BehaviorSubject<Resource[]>(this.resources);
  
  constructor() { }

  getResources(): Observable<Resource[]> {
    return this.resourcesSubject.asObservable();
  }

  getFeaturedResources(): Observable<Resource[]> {
    const featured = this.resources.filter(resource => resource.isFeatured);
    return new BehaviorSubject<Resource[]>(featured).asObservable();
  }

  getResourcesByCategory(category: string): Observable<Resource[]> {
    const filtered = this.resources.filter(resource => 
      resource.category.toLowerCase() === category.toLowerCase());
    return new BehaviorSubject<Resource[]>(filtered).asObservable();
  }

  getResourceById(id: number): Resource | undefined {
    return this.resources.find(resource => resource.id === id);
  }

  addResource(resource: Resource): void {
    resource.id = this.resources.length + 1;
    this.resources.push(resource);
    this.resourcesSubject.next(this.resources);
  }
}
