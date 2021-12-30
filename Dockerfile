FROM node:16

WORKDIR /bunny-rest

COPY package.json ./

COPY yarn.lock ./

RUN yarn install

COPY . ./

RUN yarn build
