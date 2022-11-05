import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./src/schema.graphql",
  generates: {
    "./src/resolvers-types.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        enumValues: {
          OrgMetricsSignupStatus: "./index#OrgMetricsSignupStatus",
        },
        mappers: {
          Org: "./index#OrgModel",
          OrgMetrics: "./index#OrgModel",
          OrgMetricsSignups: "./index#OrgModel",
        },
        // useIndexSignature: true,
        // avoidOptionals: true,
        // allowParentTypeOverride: true,
        // constEnums: true,
      },
    },
  },
};

export default config;
