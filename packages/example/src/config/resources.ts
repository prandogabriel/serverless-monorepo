import type { AWS } from "@serverless/typescript";

const resources: AWS["resources"] = {
  Resources: {
    GreetingConfigTable: {
      Type: "AWS::DynamoDB::Table",
      Properties: {
        TableName: "GreetingConfig",
        AttributeDefinitions: [
          {
            AttributeName: "name",
            AttributeType: "S"
          }
        ],
        KeySchema: [
          {
            AttributeName: "name",
            KeyType: "HASH"
          }
        ],
        BillingMode: "PAY_PER_REQUEST"
      }
    }
  },
  Outputs: {}
};

export default Object.freeze(resources);
