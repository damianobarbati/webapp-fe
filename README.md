# webapp-fe

Webapp starter-kit based on:
- react v18
- parcel for bundling
- tailwind for styling
- swr for data fetching
- redux toolkit for state management
- react hook form for forms handling
- react testing library for unit testing
- playwright for e2e testing
- miragejs for API mocking

Current app size is ~130KB gzipped.

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