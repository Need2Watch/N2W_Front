module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  setupFilesAfterEnv: ['<rootDir>/src/tests/unit/setup.ts'],
  globals: {
    'ts-jest': {
      diagnostics: false,
    },
  },
};
