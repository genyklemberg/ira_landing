# HomeModule Documentation

## Table of Contents

* [1. Overview](#1-overview)
* [2. Module Imports](#2-module-imports)
* [3. Component Declarations](#3-component-declarations)
* [4. Providers](#4-providers)
* [5. GalleryModule Configuration](#5-gallerymodule-configuration)


## 1. Overview

The `HomeModule` is an Angular module responsible for aggregating components, services, and other modules related to the home section of the application.  It uses Angular's routing capabilities (`RouterModule.forChild`) to handle navigation within the home section, leveraging the routes defined in `HomeRoutes`.  The module incorporates a variety of Angular Material components for UI elements and leverages external libraries like `NguCarouselModule` for carousels and `ng-gallery` for image galleries.


## 2. Module Imports

The `HomeModule` imports several necessary modules:

| Module                       | Description                                                                  |
|-------------------------------|------------------------------------------------------------------------------|
| `CommonModule`               | Provides common Angular directives and pipes.                                  |
| `FormsModule`, `ReactiveFormsModule` | Provides support for template-driven and reactive forms.                       |
| `RouterModule`               | Provides Angular's routing functionality.                                    |
| `MatIconModule`, `MatCardModule`, etc. | Various Angular Material modules for UI components (icons, cards, menus, buttons etc.). |
| `FlexLayoutModule`           | Provides a flexible layout system.                                          |
| `NguCarouselModule`          | Provides carousel functionality (third-party library).                         |
| `SharedModule`               | A custom shared module (presumably containing reusable components/services). |
| `HttpClientModule`            | Enables making HTTP requests.                                                |
| `GalleryModule`              | Provides image gallery functionality (third-party library).                   |


## 3. Component Declarations

This module declares the following components:

* `HomeOneComponent`:  (Presumably) a component representing a first variation of the home page.
* `HomeTwoComponent`: (Presumably) a component representing a second variation of the home page.
* `HeaderComponent`: The header component, likely shared across home pages.
* `IntroOneComponent`, `IntroTwoComponent`: Components for different introduction sections.
* `PortfolioComponent`: Displays a portfolio of work.
* `ServicesComponent`:  Displays offered services.
* `CtaComponent`: A call-to-action component.
* `PricingsComponent`:  Displays pricing information.
* `ContactComponent`: A contact form component.
* `FooterComponent`: The footer component, likely shared across home pages.
* `TestimonialsComponent`:  Displays testimonials.
* `PortfolioCarouselComponent`, `TestimonialsCarouselComponent`, `ServicesCarouselComponent`: Carousel components for specific content.
* `DemoComponent`: A demo component (purpose needs further clarification).
* `AllSectionsComponent`: Likely aggregates all sections of the home page.
* `WorksComponent`: Component to display works or projects.
* `ModalGalleryComponent`: Component for a modal image gallery.


## 4. Providers

The module provides `WINDOW_PROVIDERS`.  This suggests the injection of a global window object, likely for browser-specific functionalities or cross-platform compatibility.  This provider is likely defined within the `shared/helpers/window.helper` file.

## 5. GalleryModule Configuration

The `GalleryModule` is configured with custom styling for the image gallery:

The `forRoot` method is used to provide global configuration for the gallery which overrides the default styling. The height and width properties are set to '500px' and '700px' respectively for all galleries within the application.  This ensures consistency in the gallery's appearance.
