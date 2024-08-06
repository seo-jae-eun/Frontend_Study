module.exports = {
  reporters: [
    "default",
    [
      "jest-junit",
      { outputDirectory: "test-results", outputName: "report.xml" },
    ],
  ],

  preset: '@vue/cli-plugin-unit-jest',
};
