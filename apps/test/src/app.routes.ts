import { Route } from '@angular/router';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
import { FormElementsComponent } from './formelements/formelements.component';

export const appRoutes: Route[] = [
    { path: '', component: FormbuilderComponent },
    { path: 'formbuilder', component: FormbuilderComponent },
    { path: 'elements', component: FormElementsComponent },
];
