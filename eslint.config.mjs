import { createConfigForNuxt } from '@nuxt/eslint-config/flat'
import prettier from 'eslint-plugin-prettier'
// import { mdcLint } from 'mdclint'

// Run `npx @eslint/config-inspector` to inspect the resolved config interactively
export default createConfigForNuxt({
  features: {
    // Rules for module authors
    tooling: true,
    // Rules for formatting
    stylistic: true,
  },
  dirs: {},
}).append({
  plugins: {
    prettier,
  },
  rules: {
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/no-empty-object-type': 'off',
  },
})
// .append(mdcLint({
//   files: [
//     'docs/**/*.md',
//     'playground/**/*.md',
//     'examples/**/*.md',
//     'README.md',
//   ],
//   markdownlint: {
//     config: {
//       MD013: false,
//     },
//   },
// }))
