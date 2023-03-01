import type { JestConfigWithTsJest } from "ts-jest";
// import { pathsToModuleNameMapper } from "ts-jest";

// import { compilerOptions } from "./tsconfig.paths.json";

export default {
  preset: "ts-jest",
  reporters: ["default", "jest-junit"],
  collectCoverageFrom: ["src/**/*.ts", "!/node_modules/"],
  coverageReporters: ["cobertura", "html"],
  testResultsProcessor: "jest-junit",
  // moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
  //   prefix: "<rootDir>/"
  // }),
  testMatch: ["**/?(*.)+(spec|test).+(ts|js)"],
  coveragePathIgnorePatterns: [
    "index.ts",
    "node_modules",
    "src/frameworks/serverless"
  ],
  coverageThreshold: {
    global: {
      branches: 85,
      functions: 90,
      lines: 90,
      statements: 90
    }
  }
  // Altere o código abaixo caso queira adicionar regras específicas para cada pasta
  // "./src/domains/": {
  //   statements: 100,
  //   functions: 100,
  //   branches: 100,
  //   lines: 100
  // },
  // "./src/adapters/": {
  //   statements: 100,
  //   functions: 100,
  //   branches: 100,
  //   lines: 100
  // },
  // "./src/frameworks/": {
  //   statements: 100,
  //   functions: 100,
  //   branches: 100,
  //   lines: 100
  // }
  // }
} as JestConfigWithTsJest;