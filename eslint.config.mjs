import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    ignores: [
      'webpack.config.js',
      'dist/**',
      'node_modules/**',
      'postcss.config.js'
    ]
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    rules: {
      'no-var': 'error',
      'no-console': 'warn',
      'no-duplicate-imports': 'warn'
    }
  }
];
