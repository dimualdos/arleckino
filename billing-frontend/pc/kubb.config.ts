import { defineConfig } from "@kubb/core"

export default defineConfig(async () => {
  await setTimeout(() => {
    // wait for 1s, async behaviour
    return Promise.resolve(true)
  }, 1000)
  return {
    root: ".",
    input: {
      path: "https://api.arlekino.tv/swagger/?format=openapi",
    },
    output: {
      path: "./src/gen",
      clean: true,
    },
    hooks: {
      // done: ['npx eslint --fix ./src/gen', 'prettier --write "**/*.{ts,tsx}"', 'pnpm typecheck'],
    },
    plugins: [
      [
        "@kubb/swagger",
        {
          output: false,
          validate: true,
        },
      ],
      [
        "@kubb/swagger",
        {
          output: false,
          validate: true,
        },
      ],
      [
        "@kubb/swagger-ts",
        {
          output: {
            path: "models/ts",
            extName: ".ts",
          },
          group: {
            type: "tag",
          },
          enumType: "asPascalConst",
          dateType: "date",
        },
      ],
      [
        "@kubb/swagger-tanstack-query",
        {
          output: {
            path: "./clients/hooks",
            exportAs: "hooks",
          },
          group: { type: "tag" },
          client: {
            importPath: "@/src/axios-client",
          },
          infinite: {},
          dataReturnType: "full",
        },
      ],
      [
        "@kubb/swagger-client",
        {
          output: {
            path: "./clients/axios",
            exportAs: "clients",
          },
          exclude: [
            {
              type: "tag",
              pattern: "store",
            },
          ],
          group: { type: "tag", output: "./clients/axios/{{tag}}Service" },
          client: {
            importPath: "@/src/axios-client",
          },
          dataReturnType: "full",
          pathParamsType: "object",
        },
      ],
      [
        "@kubb/swagger-zod",
        {
          output: {
            path: "./zod",
            exportAs: "zod",
          },
          group: { type: "tag" },
        },
      ],
    ],
  }
})
