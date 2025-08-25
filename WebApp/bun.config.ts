// @ts-expect-error - Bun config types
import { defineConfig } from 'bun';

export default defineConfig({
  test: {
    preload: ['./test-setup.ts'],
  },
});
