const { textSpanEnd } = require('typescript');

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testTimeout: 30000, // 30 seconds
    clearMocks: true,
    testPathIgnorePatterns: [
        "/node_modules/",
        "/dist/"
    ],
    reporters: [    
        "default",
        ["jest-html-reporters", {
            outputDirectory: "test-results",
            outputName: "junit.xml"
        }]
    ],
};