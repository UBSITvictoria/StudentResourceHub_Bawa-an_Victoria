import { Injectable } from '@angular/core';
import { Resource } from '../models/resource.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  private resources: Resource[] = SAMPLE_RESOURCES;
  private resourcesSubject = new BehaviorSubject<Resource[]>(this.resources);

  getResources(): Observable<Resource[]> {
    return this.resourcesSubject.asObservable();
  }

  getResourceById(id: number): Resource | undefined {
    return this.resources.find(resource => resource.id === id);
  }

  getResourcesByCategory(category: string): Resource[] {
    return this.resources.filter(resource => resource.category === category);
  }

  getFeaturedResources(): Resource[] {
    return this.resources.filter(resource => resource.isFeatured);
  }

  addResource(resource: Resource): void {
    resource.id = this.getNextId();
    this.resources.push(resource);
    this.resourcesSubject.next([...this.resources]);
  }

  private getNextId(): number {
    return Math.max(...this.resources.map(r => r.id)) + 1;
  }
}

export const SAMPLE_RESOURCES: Resource[] = [
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
    description: 'Learn the basics of Angular framework and its components',
    category: 'Programming',
    url: 'https://example.com/angular-fundamentals',
    author: 'Jane Doe',
    publicationDate: new Date('2023-06-20'),
    isFeatured: true
  },
  {
    id: 3,
    title: 'UI/UX Design Principles',
    description: 'Essential principles for creating user-friendly interfaces',
    category: 'Design',
    url: 'https://example.com/design-principles',
    author: 'Alice Johnson',
    publicationDate: new Date('2023-04-10'),
    isFeatured: false
  },
  {
    id: 4,
    title: 'Calculus Made Easy',
    description: 'Simplified approach to understanding calculus concepts',
    category: 'Math',
    url: 'https://example.com/calculus',
    author: 'Robert Brown',
    publicationDate: new Date('2023-03-25'),
    isFeatured: true
  },
  {
    id: 5,
    title: 'Responsive Web Design',
    description: 'Techniques for creating websites that work on all devices',
    category: 'Design',
    url: 'https://example.com/responsive-design',
    author: 'Emily Wilson',
    publicationDate: new Date('2023-07-05'),
    isFeatured: false
  }
];