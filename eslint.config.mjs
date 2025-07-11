import js from '@eslint/js';
import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default [
  // Base JavaScript recommendations
  js.configs.recommended,

  // TypeScript recommendations
  ...tseslint.configs.recommended,

  // Astro recommended configuration
  ...eslintPluginAstro.configs.recommended,

  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  // Configuration for TypeScript files
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      // TypeScript specific rules
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      'prefer-const': 'error',
    },
  },

  // Configuration for Astro files
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: eslintPluginAstro.parser,
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
        sourceType: 'module',
        ecmaVersion: 'latest',
        project: './tsconfig.json',
      },
    },
    rules: {
      // Astro specific rules
      'astro/no-conflict-set-directives': 'error',
      'astro/no-unused-define-vars-in-style': 'error',
      'astro/no-set-html-directive': 'warn',
      'astro/semi': ['error', 'always'],

      // Disable conflicting rules for Astro
      'no-undef': 'off', // Astro has global types that aren't recognized
      '@typescript-eslint/no-unused-vars': 'off', // Handled by astro/no-unused-define-vars-in-style
    },
  },

  // General rules for all files
  {
    rules: {
      // Code quality
      'no-console': 'warn',
      'no-debugger': 'error',
      'no-alert': 'warn',

      // Style preferences
      'prefer-const': 'error',
      'no-var': 'error',
      'eqeqeq': ['error', 'always'],
      'curly': ['error', 'all'],

      // Import/Export
      'no-duplicate-imports': 'error',
    },
  },

  // Ignore patterns
  {
    ignores: [
      'dist/**',
      '.astro/**',
      'node_modules/**',
      '*.config.js',
      '*.config.mjs',
      '*.config.ts',
      'public/**',
    ],
  },
];
