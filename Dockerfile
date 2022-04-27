FROM mcr.microsoft.com/playwright:focal

ARG NODE_ENV
ENV NODE_ENV=$NODE_ENV

COPY ./ /opt
WORKDIR /opt

RUN yarn install --production=false && \
    yarn eslint && \
    yarn audit && \
    API_MOCKED=1 yarn build && \
    yarn test && \
    yarn test:e2e && \
    yarn build && \
    rm -rf .parcel-cache && \
    yarn cache clean && \
    rm -rf node_modules

CMD yarn serve