import { Routes } from '@angular/router';

export const rootRouterConfig: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: './views/home/home.module#HomeModule'},
  {path: 'story', loadChildren: './views/story/story.module#StoryModule'},
  // { path: 'story', component: StoryComponent },
  {path: '**', redirectTo: 'home'}
];

