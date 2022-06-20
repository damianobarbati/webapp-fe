# webapp-fe

Webapp starter-kit based on:
- parcel (bundler)
- react
- jss (styling)
- tailwind (styling)
- react-query (data fetching)
- redux-toolkit (state management)
- react hook form (forms)
- react testing library (unit testing)
- playwright (e2e testing)
- miragejs (API mocking)

Current app size is ~130KB gzipped.

## Requirements
- node: `brew install nvm && nvm install < .nvmrc && nvm use < .nvmrc`

## Development

Start development environment:
```sh
nvm install
yarn install
yarn build
```

To unit and e2e test:
```sh
yarn test
yarn test:e2e
```

## Deployment

Build and serve production build:
```sh
nvm install
yarn install
NODE_ENV=production yarn build
yarn serve
```