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
        "no-console": 0,
         // 禁止使用 var
         'no-var': "error",
         // 优先使用 interface 而不是 type
         '@typescript-eslint/consistent-type-definitions': [
             "error",
             "interface"
         ]
    },
    globals:{
    },
    env: {
        "es6": true,
        "node": true
    }
};
