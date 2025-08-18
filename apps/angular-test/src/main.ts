import { bootstrapApplication } from '@angular/platform-browser';
import { AngularFormComponent } from './app/angular-form.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AngularFormComponent, appConfig).catch(err => console.error(err));
