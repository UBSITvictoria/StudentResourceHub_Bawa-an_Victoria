import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="bg-dark text-white p-3 mt-5">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <p>&copy; {{ currentYear }} Student Resource Hub</p>
            <p>Team Members: Jane Doe, John Smith</p>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
