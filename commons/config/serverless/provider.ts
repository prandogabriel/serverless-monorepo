import type { AWS } from "@serverless/typescript";

import environment from "./environment";
import iam from "./iam";

const provider: AWS["provider"] = {
  name: "aws",
  stackName: "${self:service}-${self:custom.stage}-stack",
  runtime: "nodejs18.x",
  stage: "${self:custom.stage}",
  region: "us-east-1",
  versionFunctions: false,
  timeout: 30,
  tracing: {
    apiGateway: false,
    lambda: true
  },
  stackTags: {
    Service: "${self:service}",
    Environment: "${self:custom.stage}"
  },
  environment,
  iam
};
export default Object.freeze(provider);
