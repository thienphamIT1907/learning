/** @type {import('jest').Config} */
const config = {
  roots: ["<rootDir>/src"],
  verbose: true,
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
};

module.exports = config;
