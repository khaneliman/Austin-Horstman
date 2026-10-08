import { ApplicationConfig } from '@angular/core';
import { provideRouter, TitleStrategy, withInMemoryScrolling } from '@angular/router';
import { provideNgIconsConfig } from '@ng-icons/core';
import { routes } from './app.routes';
import { PortfolioTitleStrategy } from './shared/services/portfolio-title.strategy';

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: TitleStrategy, useClass: PortfolioTitleStrategy },
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
      })
    ),
    provideNgIconsConfig({
      size: '1.5em',
      color: 'currentColor',
    }),
  ],
};
