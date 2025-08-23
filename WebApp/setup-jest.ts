import 'zone.js';
import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

// Suppress CSS parsing errors from JSDOM during tests
const originalError = console.error;
console.error = (...args: unknown[]) => {
  // Check if this is a CSS parsing error from JSDOM
  const errorMessage = args[0];
  if (
    errorMessage &&
    ((errorMessage instanceof Error &&
      errorMessage.message &&
      errorMessage.message.includes('Could not parse CSS stylesheet')) ||
      (typeof errorMessage === 'string' &&
        errorMessage.includes('Could not parse CSS stylesheet')) ||
      (errorMessage.toString &&
        errorMessage.toString().includes('Could not parse CSS stylesheet')))
  ) {
    // Suppress CSS parsing errors
    return;
  }
  originalError.apply(console, args);
};

// Initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
