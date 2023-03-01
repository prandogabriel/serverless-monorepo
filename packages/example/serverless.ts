import type { AWS } from "@serverless/typescript";

import config from "../../commons/config/serverless";
import resources from "./src/config/resources";
import service from "./src/config/service";

export const configuration: AWS = {
  service: service.name,
  frameworkVersion: ">=3.26.0",
  // functions,
  resources,
  provider: config.provider,
  custom: config.custom,
  package: {
    individually: true,
    excludeDevDependencies: true
  },
  plugins: ["serverless-esbuild", "serverless-offline", "serverless-localstack"]
};

module.exports = configuration;
