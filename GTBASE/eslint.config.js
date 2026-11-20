import globals from 'globals';
export default [{
  files: ['src/**/*.js'],
  languageOptions: { globals: globals.browser },
  rules: { 'no-undef': 'error', 'no-unused-vars': ['error', { args: 'none' }], 'no-unreachable': 'error' }
}];
