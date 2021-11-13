module.exports = {
  testMatch: ['**/+(*.)+(spec).+(ts)'],
  globals: {
    'ts-jest': {
      stringifyContentPathRegex: '\\.html$',
      allowSyntheticDefaultImports: true,
      astTransformers: [
        'jest-preset-angular/InlineHtmlStripStylesTransformer.js',
      ],
    },
  },
  testURL: 'http://github.com/@angular-cli-builders',
  setupFilesAfterEnv: [`${__dirname}/jest.setup.js`],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png)$': `${__dirname}/mock-module.js`,
    ...pathsToModuleNameMapper(compilerOptions.paths, {
      prifix: `${__dirname}/`,
    }),
    '!raw-loader!(.+)': '$1',
  },
  transform: {
    '^.+\\js$': 'babel-jest',
    '\\.svg$': 'jest-raw-loader',
  },
  transformIgnorePatterns: ['/node_modules/(?!).+\\.(ts|js|html)$'],
  moduleFileExtensions: ['ts', 'js', 'html'],
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
  setupFiles: [__dirname + '/jest.setup.js'],
}
