const js = require('@eslint/js')

module.exports = [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    ignores: ['node_modules'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        $: true,
        $$: true,
        browser: true,
        driver: true,
        describe: true,
        it: true,
        cy: true,
        before: true,
        after: true,
        beforeEach: true,
        afterEach: true,
        expect: true,
        process: true,
        require: true,
        exports: true,
        console: true,
        __dirname: true,
        module: true,
      },
    },
    rules: {
      semi: ['error', 'never'],
      indent: ['error', 2],
      quotes: ['error', 'single'],
      'object-curly-spacing': ['error', 'always'],
      'comma-dangle': ['error', 'always-multiline'],
      'no-unused-vars': 'warn',
      'no-console': 'off',
    },
  },
]
