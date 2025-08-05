import { ApplicationConfig, provideAppInitializer, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { setAssetPath } from '@parlamentsdienste-components/core/components';
import { appRoutes } from '../app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
        provideAppInitializer(() => {
            setAssetPath('http://localhost:4200');
        }),
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(appRoutes),
    ],
};
