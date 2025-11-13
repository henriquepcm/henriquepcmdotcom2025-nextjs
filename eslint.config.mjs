import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends("next/core-web-vitals", "next/typescript"),
    {
        files: ["src/**/*.{ts,tsx,js,jsx}"],
        ignores: [
            "node_modules/**",
            "**/.next/**",
            "dist/**",
            "build/**",
            "coverage/**",
            "**/*.config.js",
            "**/*.config.mjs",
        ],
        rules: {
            "@typescript-eslint/no-explicit-any": "error",
            "no-console": ["error", { allow: ["warn", "error"] }],
        },
    },
];

export default eslintConfig;
