module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    "<rootDir>/**/*.ts",
    "!<rootDir>/types/**/*.ts",
    "!<rootDir>/**/index.ts",
    "!<rootDir>/**/*.spec.ts",
    "!<rootDir>/**/*.test.ts",
    "!<rootDir>/__fixtures__/**/*.ts",
    "!<rootDir>/test/**/*.ts",
  ],
  coverageReporters: ["clover", "json", "lcov", "text", "json-summary"],
  coverageThreshold: {
    global: {
      functions: 90,
      statements: 90,
    },
  },
  moduleFileExtensions: ["ts", "js", "json"],
  moduleDirectories: ["node_modules"],
  rootDir: "src",
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  testEnvironment: "node",
  testMatch: ["<rootDir>/**/?(*.)(spec|test).ts"],
};
