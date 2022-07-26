import { Component, importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { provideNoopAnimations } from '@angular/platform-browser/animations';

@Component({
  selector: 'uc-root',
  template: `<router-outlet></router-outlet>`,
  standalone: true,
  imports: [RouterModule]
})
export class AppComponent {
  title = 'ucars-interview';

  static bootstrap() {
    bootstrapApplication(this, {
      providers: [
        provideNoopAnimations(),
        importProvidersFrom(
          RouterModule.forRoot(
            [
              {
                path: '',
                loadComponent: () =>
                  import('./layout/layout.component').then(
                    (m) => m.LayoutComponent
                  ),
                loadChildren: () =>
                  import('./layout/layout.routes').then((m) => m.routes),
              },
            ],
          ),
          HttpClientModule
        ),
      ]
    }).catch((e) => console.error(e));
  }
}
