module.exports = {
    parser: '@typescript-eslint/parser',
    root: true,
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module'
    },
    extends: ['futu'],
    plugins:['@typescript-eslint'],
    rules:{
        "semi": ["error", "always"],
        "no-console": 0
    },
    globals:{
    },
    env: {
        "es6": true,
        "node": true
    }
};
