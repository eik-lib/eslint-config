# @eik/eslint-config

Shared config for ESLint used in Eik projects.

## Install

```
npm install --save-dev eslint @eik/eslint-config
```

## Usage

The default config should cover most needs, but you can extend or override if you need to.

```js
// eslint.config.js

import config from "@eik/eslint-config";

export default [
	...config,
	/* Your customisations */
];
```

If you do need to change the config, consider whether that change should happen here in the shared config so it applies to all repos.
