# Nuxt 5 Starter Template

A modern Nuxt starter template packed with essential features and best practices.

This template serves as a future-proof foundation for your projects, allowing you to:

- Leverage [Nuxt 5](https://nuxt.com/docs/4.x/getting-started/upgrade#testing-nuxt-5) features
- Follow best practices and modern development patterns
- Typescript enabled by default

## Features

- [x] [Nuxt](https://nuxt.com)
- [x] [Vue](https://vuejs.org)
- [x] [VueUse](https://nuxt.com/modules/vueuse)
- [x] [Nuxt UI](https://ui.nuxt.com/) By default it uses the **Mint theme** from the [Nuxt UI theme gallery](https://ui.nuxt.com/theme)
- [x] [Nuxt Icons](https://nuxt.com/modules/icon)
- [x] [Nuxt Image](https://image.nuxt.com/) A drop-in replacement for the native <img> tag.
- [x] [Nuxt Fonts](https://fonts.nuxt.com/) Plug-and-play web font optimization and configuration
- [x] [Security](https://nuxt-security.vercel.app/)

### 👉 Code quality and conventions

- [x] [ESLint](https://eslint.org/) with [@nuxt/eslint](https://eslint.nuxt.com/) and [Prettier](https://prettier.io/) (including [Tailwind class sorting](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)) to check the source code for programmatic and stylistic errors. `npm run lint` and format-on-save use the same formatting.
- [x] [eslint-plugin-better-tailwindcss](https://github.com/schoero/eslint-plugin-better-tailwindcss) correctness rules (`no-unknown-classes`, `no-conflicting-classes`, `no-concatenated-classes`) as errors in Vue files.
- [x] Tailwind IntelliSense treats `*.css` as Tailwind, suggests classes inside strings, and also reads the `class` and Nuxt UI `ui` attributes and `defineAppConfig`.
- [x] [VS Code](https://code.visualstudio.com/) formats the whole file on save. The workspace formatter for JavaScript, TypeScript, and Vue is the [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), which runs Prettier, so a separate Prettier extension is not needed. Install the recommended extensions when prompted: ESLint, [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar), and [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss).
- [x] Git hooks with [Husky](https://typicode.github.io/husky/) and [lint-staged](https://github.com/okonet/lint-staged) to automatically lint and format your code upon committing.

## Getting Started

### Prerequisites

- Node.js (v24.0.0 or newer)
- npm (v11.0.0 or newer)

### Installation

1. Clone the repository
2. Install dependencies `npm install`
3. Start the development server `npm run dev`
