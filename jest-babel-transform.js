import { createTransformer } from 'babel-jest';

const jestBabelTransform = createTransformer({
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        debug: false,
        corejs: 3,
      },
    ],
    '@babel/preset-react',
  ],
  plugins: ['@babel/plugin-syntax-import-assertions'],
});

export default jestBabelTransform;
