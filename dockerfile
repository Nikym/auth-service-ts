FROM node:13.8.0-alpine

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./
COPY tsconfig.json ./

RUN yarn

COPY src ./src
COPY tests ./tests
RUN yarn run test
RUN yarn run build

ENTRYPOINT [ "yarn", "start" ]