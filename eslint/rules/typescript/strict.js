// @ts-check

/** @type {import("eslint").Linter.Config} */
const config = {
  rules: {
    "@typescript-eslint/explicit-function-return-type": ["off"],
    "@typescript-eslint/no-misused-promises": ["warn"],
    "@typescript-eslint/no-unsafe-assignment": ["warn"],
    "@typescript-eslint/no-unsafe-member-access": ["warn"],
    "@typescript-eslint/prefer-nullish-coalescing": ["off"],
    "@typescript-eslint/restrict-template-expressions": ["off"],
  },
};

module.exports = config;
