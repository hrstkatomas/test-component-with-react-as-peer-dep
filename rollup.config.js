import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import {bundleStats} from "rollup-plugin-bundle-stats";

export default {
    input: "src/HelloWorld.tsx", // Entry point
    output: [
        {
            file: "dist/index.cjs.js",
            format: "cjs",
            sourcemap: true,
        },
        {
            file: "dist/index.esm.js",
            format: "esm",
            sourcemap: true,
        },
    ],
    // indicate which modules should be treated as external
    external: ['react'],
    plugins: [
        typescript(), // Transpile TypeScript to JavaScript
        commonjs(), // Converts CommonJS to ESModules
        babel({
            presets: ["@babel/preset-react"],
            babelHelpers: "bundled",
        }),
        terser(), // Minify the bundle
        bundleStats()
    ],
};
