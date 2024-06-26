/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  jsxSingleQuote: true,
  arrowParens: "always",
  bracketSameLine: false,
  bracketSpacing: true,
  configPath: "",
  disableLanguages: [],
  documentSelectors: [],
  embeddedLanguageFormatting: "auto",
  enable: true,
  enableDebugLogs: false,
  endOfLine: "lf",
  htmlWhitespaceSensitivity: "css",
  ignorePath: ".prettierignore",
  insertPragma: false,
  jsxBracketSameLine: false,
  packageManager: "npm",
  prettierPath: "",
  printWidth: 80,
  proseWrap: "preserve",
  quoteProps: "as-needed",
  requireConfig: false,
  requirePragma: false,
  resolveGlobalModules: false,
  semi: true,
  singleAttributePerLine: false,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  useEditorConfig: true,
  useTabs: false,
  vueIndentScriptAndStyle: false,
  withNodeModules: false,
};

export default config;