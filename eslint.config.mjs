import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import eslintPluginImport from "eslint-plugin-import";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends("next/core-web-vitals", "next/typescript"),

    // Add plugin + rules for import sorting
    {
        files: ["**/*.js", "**/*.ts", "**/*.tsx"],
        plugins: {
            import: eslintPluginImport,
        },
        settings: {
            "import/resolver": {
                typescript: {},
            },
        },
        rules: {
            "import/order": [
                "error",
                {
                    groups: [
                        "builtin", // Node.js built-ins (fs, path, etc.)
                        "external", // npm packages (react, next, lodash, etc.)
                        "internal", // Aliased paths like @/components, @/utils
                        ["parent", "sibling", "index"], // Relative imports
                        "object", // Imports of object patterns
                        "type", // TypeScript types
                    ],
                    pathGroups: [
                        {
                            pattern: "@/components/**",
                            group: "internal",
                            position: "before",
                        },
                        {
                            pattern: "@/types/**",
                            group: "type",
                            position: "after",
                        },
                        {
                            pattern: "@/utils/**",
                            group: "internal",
                            position: "after",
                        },
                        {
                            pattern: "react",
                            group: "external",
                            position: "before",
                        },
                        {
                            pattern: "next/**",
                            group: "external",
                            position: "before",
                        },
                        {
                            pattern: "**/*.css",
                            group: "external",
                            position: "before",
                        },
                        {
                            pattern: "@/**",
                            group: "internal",
                            position: "after",
                        },
                    ],
                    pathGroupsExcludedImportTypes: ["builtin"],
                    alphabetize: {
                        order: "asc",
                        caseInsensitive: true,
                    },
                },
            ],
        },
    },
];

export default eslintConfig;
