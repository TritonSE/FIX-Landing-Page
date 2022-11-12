/**
 * Override rules from eslint-config-airbnb-base, if present.
 */
function getAirbnbOverrideRules() {
  let airbnbRules;
  try {
    airbnbRules = require('eslint-config-airbnb-base/rules/style.js').rules;
  } catch (e) {
    return {};
  }

  return {
    // Allow the use of for...of statements.
    'no-restricted-syntax': airbnbRules['no-restricted-syntax'].filter(
      (item) => item.selector !== 'ForOfStatement'
    )
  };
}

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  plugins: ['svelte3', '@typescript-eslint'],
  ignorePatterns: ['*.cjs'],
  overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
  settings: {
    'svelte3/typescript': () => require('typescript')
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020
  },
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  rules: {
    'default-case': 'off',
    'no-plusplus': 'off',
    'no-continue': 'off',
    'prefer-template': 'off',
    'prefer-destructuring': 'off',
    'class-methods-use-this': 'off',

    // Allow leading underscores in identifiers (e.g. _id in MongoDB).
    'no-underscore-dangle': 'off',

    // Some APIs use snake_case identifiers.
    camelcase: 'off',

    // Depending on the context, using bracket notation might be clearer.
    'dot-notation': 'off',

    /**
     * Reassigning parameters can be useful to avoid creating another variable,
     * and to modify objects by reference.
     */
    'no-param-reassign': 'off',

    /**
     * Unused variables and arguments should be removed in most cases, but it's
     * convenient to allow them when the code is still being implemented.
     *
     * Prefix variable names with an underscore to suppress the warning.
     */
    'no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }
    ],

    // Not necessary for some APIs (consistency reasons)
    'import/prefer-default-export': 'off',

    // Stylistic rules.
    'lines-between-class-members': 'off',

    ...getAirbnbOverrideRules()
  }
};
