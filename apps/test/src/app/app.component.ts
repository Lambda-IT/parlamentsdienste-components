import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// import { setAssetPath } from '@parlamentsdienste-components/core/components';

console.log('AppComponent initialized');
@Component({
    imports: [RouterOutlet],
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    // changeDetection: ChangeDetectionStrategy.Default,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
