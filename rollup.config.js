import commonjs from "@rollup/plugin-commonjs";
import html from "@rollup/plugin-html";
import replace from "@rollup/plugin-replace";

export default {
    input: "src/index.js",
    output: {
        dir: "build",
        format: "esm"
    },
    plugins: [
        commonjs(),
        replace({
            "REPLACED_VALUE": true
        }),
        html({title: "Nollup Test: Named Exports"})
    ]
};
