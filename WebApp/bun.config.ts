import { defineConfig } from 'bun';

export default defineConfig({
  test: {
    preload: ['./test-setup.ts'],
  },
});
