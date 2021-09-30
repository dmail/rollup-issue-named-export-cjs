import { rollup } from "rollup";
import commonjs from "@rollup/plugin-commonjs";

import { fileURLToPath } from "node:url";

const rollupBuild = await rollup({
  input: fileURLToPath(new URL("./main.cjs", import.meta.url)),
  plugins: [commonjs()],
});

await rollupBuild.write({
  file: "./dist/main.mjs",
  format: "esm",
});

const { answer } = await import("./dist/main.mjs");
if (answer !== 42) {
  throw new Error(`answer should be 42`);
}
