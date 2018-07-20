module.exports = {
  extends: 'airbnb',
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/no-unresolved': 'off',
    'no-console': 'off',
    'react/prop-types': ['error', { ignore: ['navigation'] }],
    'class-methods-use-this': 'off',
  },
};
