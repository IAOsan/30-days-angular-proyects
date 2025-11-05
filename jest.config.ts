import type { Config } from 'jest';
import { createCjsPreset } from 'jest-preset-angular/presets';

const config: Config = {
  ...createCjsPreset(),
  preset: 'jest-preset-angular',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '.*\\.e2e\\.spec\\.ts$',
    '.*\\.functional\\.spec\\.ts$',
  ],
  verbose: true,
};

export default config;
