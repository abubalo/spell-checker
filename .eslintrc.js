module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: 2023,
      sourceType: "module",
    },
    plugins: ["@typescript-eslint"],
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "prettier/@typescript-eslint",
      "plugin:prettier/recommended",
    ],
    rules: {
      // TypeScript specific rules
      "@typescript-eslint/explicit-function-return-type": "off", // Allow inferred return types
      "@typescript-eslint/no-explicit-any": "off", // Allow the use of 'any' type
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }], // Allow unused variables with '_' prefix
      "@typescript-eslint/no-empty-interface": "warn", // Warn about empty interfaces
  
      // General ESLint rules
      "no-console": "warn", // Warn about console.log, etc.
      "no-debugger": "error", // Disallow debugger statements
      "no-unused-vars": "off", // Handled by TypeScript's @typescript-eslint/no-unused-vars
  
      // Prettier related rules
      "prettier/prettier": "error",
    },
  };
  