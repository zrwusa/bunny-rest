FROM node:16

WORKDIR /bunny-rest

COPY package.json ./

COPY yarn.lock ./

#RUN yarn install

ARG NODE_ENV

RUN if [ "$NODE_ENV" = "development" ]; \
        then yarn install; \
        else yarn install --production; \
        fi

COPY . ./

RUN yarn build
