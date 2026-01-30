import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { registerLocaleData } from '@angular/common';
import { LOCALE_ID } from '@angular/core';
import localeRu from '@angular/common/locales/ru';
registerLocaleData(localeRu);

bootstrapApplication(App, {
  providers: [{ provide: LOCALE_ID, useValue: 'ru-RU' }],
});

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
