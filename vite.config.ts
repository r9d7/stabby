import devtools from "solid-devtools/vite";
import UnoCSS from "unocss/vite";
import Icons from "unplugin-icons/vite";
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    devtools({
      autoname: true,
      locator: {
        targetIDE: "vscode",
        key: "Alt",
        jsxLocation: true,
        componentLocation: true,
      },
    }),
    UnoCSS(),
    Icons({ compiler: "solid" }),
    solidPlugin(),
  ],
  server: { port: 3000 },
  build: { target: "esnext" },
});
