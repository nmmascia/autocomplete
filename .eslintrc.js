const path = require('path');

module.exports = {
    parser: 'babel-eslint',
    extends: 'eslint-config-airbnb/base',
    parserOptions: {
        ecmaVersion: 7,
        sourceType: 'module',
    },
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    rules: {
        'no-undef': 2,
        indent: [2, 4, { 'SwitchCase': 1 }],
        'arrow-body-style': 0,
        'object-curly-spacing': 0,
        'import/no-extraneous-dependencies': 0,
        'no-unused-vars': [2, { 'varsIgnorePattern': 'log' }],
    },
    settings: {
        'import/resolver': {
            webpack: {
                config: path.join(path.resolve('.'),  'cfg',  'webpack.config.dev.js'),
            },
        },
    },
}
