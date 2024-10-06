import eslintPluginAstro from "eslint-plugin-astro";
import eslintPluginA11y from "eslint-plugin-jsx-a11y";
export default [
  ...eslintPluginAstro.configs.recommended,
  {
    plugins: {
      "jsx-a11y": eslintPluginA11y,
    },
    rules: {
      "jsx-a11y/anchor-is-valid": "warn",
      "jsx-a11y/alt-text": "error",
      "jsx-a11y/no-autofocus": "warn",
      "jsx-a11y/label-has-associated-control": [
        "error",
        {
          control: "nesting",
          depth: 25,
        },
      ],
    },
  },
];
