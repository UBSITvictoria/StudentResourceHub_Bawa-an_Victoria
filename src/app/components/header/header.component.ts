import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <header class="bg-white shadow-sm">
      <nav class="container mx-auto px-4 py-3 flex justify-between items-center">
        <a routerLink="/" class="text-xl font-bold text-gray-800">Student Resource Hub</a>
        
        <div class="flex items-center space-x-6">
          <a routerLink="/" routerLinkActive="text-blue-600" [routerLinkActiveOptions]="{exact: true}" 
             class="text-gray-600 hover:text-gray-900">Home</a>
          
          <div class="relative group">
            <button class="text-gray-600 hover:text-gray-900 flex items-center">
              Categories
              <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div class="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block">
              <div class="py-1">
                <a routerLink="/categories/programming" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Programming</a>
                <a routerLink="/categories/design" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Design</a>
                <a routerLink="/categories/math" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Math</a>
              </div>
            </div>
          </div>
          
          <a routerLink="/about" routerLinkActive="text-blue-600" 
             class="text-gray-600 hover:text-gray-900">About</a>
          
          <a routerLink="/add-resource" routerLinkActive="text-blue-600" 
             class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Add Resource
          </a>
        </div>
      </nav>
    </header>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class HeaderComponent {}