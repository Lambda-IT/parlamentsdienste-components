# How to setup a React project with the parlamentsdienste components library.

1.  Start a new react project using vite, next.js, nx...

2.  Install the parlamentsdienste components library

    -   install the core library first `@parlamentsdienste-components/core`
    -   install the react wrapper library `@parlamentsdienste-components/react`

3.  To add fonts and icons add this objectsto the `angular.json` assets array:

    ```json
        "assets": [
              {
                "glob": "**/*",
                "input": "node_modules/@parlamentsdienste-components/core/dist/parlamentsdienstecore/assets",
                "output": "assets"
              },
        ]
    ```

4.  To add the base styles and fonts add these two lines to the main entry file (e.g. `main.tsx` or `layout.tsx`):

    ```typescript
    import '@parlamentsdienste-components/core/styles/parlamentsdienstecore.css';
    import '@parlamentsdienste-components/core/styles/typography.css';
    ```

5.  Call setAssetPath in your app-initializer and set it to the baseUrl of your project

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
