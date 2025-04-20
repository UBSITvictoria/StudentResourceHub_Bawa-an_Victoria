import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div class="container">
      <h2>About Student Resource Hub</h2>
      <p>
        The Student Resource Hub is a web application designed to help students
        find and share educational resources. It provides a centralized platform
        where students can access resources organized by categories such as
        Programming, Design, and Math.
      </p>
      <p>
        This application was developed as part of the Applications Development
        course, showcasing the use of Angular for building responsive single-page
        applications with dynamic routing and data binding capabilities.
      </p>
      <h3>Features:</h3>
      <ul>
        <li>Browse resources by category</li>
        <li>View detailed information about resources</li>
        <li>Add new resources to the collection</li>
        <li>Responsive design that works on all devices</li>
      </ul>
    </div>
  `,
  styles: []
})
export class AboutComponent {}