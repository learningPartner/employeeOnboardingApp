import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { tokenInterceptor } from './core/interceptor/token.interceptor';
import { errorInterceptor } from './core/interceptor/error.interceptor';
import { provideStore } from '@ngrx/store';
import { counterReducer } from './store/counter.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withInterceptors([tokenInterceptor, errorInterceptor])),
    provideRouter(routes),
     provideStore({count:counterReducer})]
};
