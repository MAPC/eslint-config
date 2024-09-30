# eslint-config

## Overview

This is a [shareable configuration](https://eslint.org/docs/latest/extend/shareable-configs) for [ESLint](https://eslint.org/), made specifically for web applications at [MAPC](https://www.mapc.org/).

## Rules

Extends the [recommended JS defaults from ESLint](https://eslint.org/docs/latest/rules), and includes [the official React/JSX ESLint rules](https://github.com/jsx-eslint/eslint-plugin-react) and [the official React Hooks ESLint rules](https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks/README.md).

Other small additions:
* [Some rules](https://github.com/ArnaudBarre/eslint-plugin-react-refresh) to ensure [Fast Refresh](https://github.com/facebook/react/blob/04bd67a4906d387ecdb8cbc798144dec2db811a5/packages/react-refresh/README.md#L3) works
* [Some rules](https://github.com/TristonJ/eslint-plugin-prefer-arrow) to prefer [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
* [Some rules](https://github.com/prettier/eslint-config-prettier) to help minimize conflicts when used in conjunction with [Prettier](https://prettier.io/)

Lastly, there are some individual rule overrides, including (but not limited to):
* Allow up to 160 characters per line
* Enforce 2 space indentation
* Enforce use of curly brackets
* Enforce semicolons;
* Enforce camelCase (except when destructuring JSON, which sometimes uses snake_case or other formats)
* Enforce default case in case/switch statements
* Enforce [use of === and !==](https://eslint.org/docs/latest/rules/eqeqeq)
* Prohibit [block-scoped var](https://eslint.org/docs/latest/rules/block-scoped-var)

## Usage

Add as a dev dependency: `yarn add -D @mapc/eslint-config`

Requires `eslint >= 9` as a peer dependency: `yarn add -D 'eslint@>=9'`

To use this in conjunction with `prettier`: `yarn add -D prettier`

The ESLint docs have a [section on using shared configs](https://eslint.org/docs/latest/use/configure/configuration-files#using-a-shareable-configuration-package).

For most of our projects, that means creating a `eslint.config.js` at the project root, possibly using this snippet as a starting point:

```js
import eslintConfig from "@mapc/eslint-config";

export default [
  {
    plugins: {
      "mapc-eslint-config": eslintConfig,
    },
  },
];
```

For guidance on combining this ESLint config with other configs/plugins, or to override particular rules, see [these ESLint docs on combining configs](https://eslint.org/docs/latest/use/configure/combine-configs). 
