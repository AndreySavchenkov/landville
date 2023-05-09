module.exports = {
    root: true,
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'next',
        'next/core-web-vitals',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'prettier',
        "plugin:prettier/recommended"
    ],
    plugins: ['@typescript-eslint', 'react', 'prettier'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    rules: {
        "prettier/prettier": [
            "error",
            {
                "endOfLine": "auto"
            }
        ]
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};