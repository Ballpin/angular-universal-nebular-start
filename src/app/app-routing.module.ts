import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const ROUTES = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'},
  { path: 'lazy/nested', loadChildren: './lazy/lazy.module#LazyModule'},
  { path: 'pages', loadChildren: './pages/pages.module#PagesModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule {}