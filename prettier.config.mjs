/** @type {import("prettier").Config} */
const config = {
  trailingComma: "es5",
  htmlWhitespaceSensitivity: "ignore",
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindFunctions: ["tv"],
};
export default config;
