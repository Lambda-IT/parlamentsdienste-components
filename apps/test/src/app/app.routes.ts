import { Route } from '@angular/router';
import { FormbuilderComponent } from '../formbuilder/formbuilder.component';
import { FormElementsComponent } from '../formelements/formelements.component';
import { AppComponent } from './app.component';

export const appRoutes: Route[] = [
    { path: '', component: AppComponent },
    { path: 'formbuilder', component: FormbuilderComponent },
    { path: 'elements', component: FormElementsComponent },
];
