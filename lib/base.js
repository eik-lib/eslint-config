import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier/recommended";
import js from "@eslint/js";

export default [
	js.configs.recommended,
	prettierConfig,
	prettierPlugin,
	{
		ignores: ["coverage/*", "node_modules/*", "tap-snapshots/*"],
	},
];
