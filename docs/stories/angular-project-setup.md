# How to setup an Angular project with the parlamentsdienste components library.

1. Start a new angular project using the Angular CLI:
    ```bash
    ng new my-angular-app
    cd my-angular-app
    ```
2. Install the parlamentsdienste components library

    - install the core library first
    - install the angular wrapper library

3. To add fonts and icons add these two objects to the `angular.json` assets array:

    ```json
        "assets": [
              {
                "glob": "**/*",
                "input": "node_modules/@parlamentsdienste-components/core/dist/parlamentsdienstecore/assets",
                "output": "assets"
              },
              {
                "glob": "**/*",
                "input": "node_modules/@parlamentsdienste-components/core/dist/parlamentsdienstecore/assets-icon",
                "output": "assets-icon"
              }
        ]
    ```

4. To add the base styles and fonts add these two lines to the `styles` array in `angular.json`:

    ```json
        "styles": [
            "node_modules/@parlamentsdienste-components/core/dist/parlamentsdienstecore/typography.css",
            "node_modules/@parlamentsdienste-components/core/dist/parlamentsdienstecore/parlamentsdienstecore.css"
        ],
    ```

5. Call setAssetPath in your app-initializer and set it to the baseUrl of your project

    ```typescript
    import { setAssetPath } from '@parlamentsdienste-components/core/components';

    bootstrapApplication(AppComponent, {
        providers: [
            provideAppInitializer(() => {
                setAssetPath('http://localhost:4200');
            }),
            provideZoneChangeDetection({ eventCoalescing: true }),
            provideRouter(appRoutes),
        ],
    }).catch(err => console.error(err));
    ```
