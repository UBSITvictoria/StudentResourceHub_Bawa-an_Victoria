import { Component } from '@angular/core';
import { forwardRef } from "@angular/core";

@Component({
  selector: 'app-header',
  template: `
    <header class="bg-primary text-white p-3">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6">
            <h1>Student Resource Hub</h1>
          </div>
          <div class="col-md-6">
            <app-navigation></app-navigation>
          </div>
        </div>
      </div>
    </header>
  `,
  styles: [],
  imports: [forwardRef(() => NavigationComponent)]
})
export class HeaderComponent {}

@Component({
  selector: 'app-navigation',
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" routerLink="/home" routerLinkActive="active">Home</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="categoriesDropdown" role="button" data-bs-toggle="dropdown">
                Categories
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" routerLink="/categories/Programming">Programming</a></li>
                <li><a class="dropdown-item" routerLink="/categories/Design">Design</a></li>
                <li><a class="dropdown-item" routerLink="/categories/Math">Math</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/about" routerLinkActive="active">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/add-resource" routerLinkActive="active">Add Resource</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: []
})
export class NavigationComponent {}