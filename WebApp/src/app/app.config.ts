import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideNgIconsConfig } from '@ng-icons/core';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideNgIconsConfig({
      size: '1.5em',
      color: 'currentColor',
    }),
  ],
};
