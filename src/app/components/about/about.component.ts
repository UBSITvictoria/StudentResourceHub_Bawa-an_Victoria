import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mx-auto px-4 py-8">
      <div class="max-w-3xl mx-auto">
        <h1 class="text-3xl font-bold text-gray-900 mb-6">About Student Resource Hub</h1>
        
        <div class="prose max-w-none">
          <p class="text-gray-600 mb-4">
            Student Resource Hub is a platform designed to help students find and share educational resources
            across different fields of study. Our focus areas include Programming, Design, and Mathematics.
          </p>

          <h2 class="text-xl font-semibold text-gray-800 mt-8 mb-4">Our Mission</h2>
          <p class="text-gray-600 mb-4">
            To provide a centralized platform where students can discover high-quality educational resources
            and contribute to the learning community by sharing valuable materials they've found helpful.
          </p>

          <h2 class="text-xl font-semibold text-gray-800 mt-8 mb-4">Categories</h2>
          <ul class="list-disc pl-6 text-gray-600 mb-6">
            <li class="mb-2">Programming: Resources for learning various programming languages and software development</li>
            <li class="mb-2">Design: Materials related to UI/UX design, graphic design, and visual arts</li>
            <li class="mb-2">Mathematics: Resources covering various mathematical concepts and problem-solving</li>
          </ul>

          <h2 class="text-xl font-semibold text-gray-800 mt-8 mb-4">Contact</h2>
          <p class="text-gray-600">
            For any questions or suggestions, please feel free to reach out to our team at 
            <a href="mailto:contact@studentresourcehub.com" class="text-blue-600 hover:text-blue-800">
              contactstudentresourcehub.com
            </a>
          </p>
        </div>
      </div>
    </div>
  `
})
export class AboutComponent {}