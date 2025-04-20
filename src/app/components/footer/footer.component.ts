import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-gray-800 text-white py-6 mt-auto">
      <div class="container mx-auto px-4">
        <div class="text-center">
          <p class="mb-2">&copy; {{ currentYear }} Student Resource Hub. All rights reserved.</p>
          <p class="text-gray-400">Created by Team Members: Victoria Bawa-an</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
