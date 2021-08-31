module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        'react',
    ],
    rules: {
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
            },
        ],
        camelcase: [
            0,
            {
                properties: 'never',
            },
        ],
        'no-unused-vars': [
            'error',
            {
                vars: 'all',
                args: 'none',
                ignoreRestSiblings: true,
            },
        ],
        'max-len': [
            2,
            150,
            4,
            {
                ignoreUrls: true,
                ignoreComments: true,
                ignoreRegExpLiterals: true,
            },
        ],
        'no-underscore-dangle': 'off',
        'class-methods-use-this': 'off',
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-filename-extension': [
            1,
            {
                extensions: [
                    '.js',
                    '.jsx',
                ],
            },
        ],
        'react/forbid-prop-types': [
            'error',
            {
                forbid: [],
            },
        ],
        'react/react-in-jsx-scope': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'react/destructuring-assignment': 'off',
        'import/prefer-default-export': 'off',
        'react/prefer-stateless-function': [0, { ignorePureComponents: true }],
        'linebreak-style': 'off',
        'no-console': 'off'
    },
};
