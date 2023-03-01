import type { AWS } from "@serverless/typescript";

const role: AWS["provider"]["iam"] = {
  role: {
    statements: [
      {
        Effect: "Allow",
        Action: ["xray:PutTraceSegments", "xray:PutTelemetryRecords"],
        Resource: ["*"]
      },
      {
        Effect: "Allow",
        Action: [
          "dynamodb:Query",
          "dynamodb:Scan",
          "dynamodb:GetItem",
          "dynamodb:PutItem",
          "dynamodb:UpdateItem",
          "dynamodb:DeleteItem"
        ],
        Resource: [
          {
            "Fn::GetAtt": ["GreetingConfigTable", "Arn"]
          }
        ]
      }
    ]
  }
};

export default Object.freeze(role);
