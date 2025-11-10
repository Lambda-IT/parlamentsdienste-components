import { ApplicationConfig, provideAppInitializer, provideZoneChangeDetection } from '@angular/core';
import { setAssetPath } from '@parlamentsdienste/core/components';

export const appConfig: ApplicationConfig = {
    providers: [
        provideAppInitializer(() => {
            setAssetPath('http://localhost:4200');
        }),
        provideZoneChangeDetection({ eventCoalescing: true }),
    ],
};
