// frontend/src/app/app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
// Importe o provideHttpClient e withFetch
import { provideHttpClient, withFetch } from '@angular/common/http';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // Configura as rotas para a aplicação
    provideRouter(routes),

    // Configura o HttpClient para fazer requisições HTTP de forma moderna
    provideHttpClient(withFetch()),
  ],
};
