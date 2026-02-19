/* src/app/app.routes.ts */
import { Routes } from '@angular/router';
import { TemplateDemoComponent } from './template-demo/template-demo';
import { ReactiveDemoComponent } from './reactive-demo/reactive-demo';
import { CustomFormComponent } from './custom-form/custom-form';

export const routes: Routes = [
  { path: 'template-form', component: TemplateDemoComponent },
  { path: 'reactive-form', component: ReactiveDemoComponent },
  { path: 'custom-form', component: CustomFormComponent },
  { path: '', redirectTo: '/template-form', pathMatch: 'full' } // Default page
];