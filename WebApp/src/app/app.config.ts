import { ApplicationConfig } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideNgIconsConfig } from '@ng-icons/core';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'disabled',
      })
    ),
    provideHttpClient(),
    provideNgIconsConfig({
      size: '1.5em',
      color: 'currentColor',
    }),
  ],
};
