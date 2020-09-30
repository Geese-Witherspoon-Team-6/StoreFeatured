module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
        "jest/globals": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:jest/recommended",
        "plugin:jest/style",
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-hooks",
        "jest",
    ],
    "rules": {
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-expect": "error",
    }
};
