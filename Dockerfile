FROM node:19

WORKDIR /bunny-rest

COPY package.json ./

COPY yarn.lock ./

ARG PKG_INSTALL_ENV

RUN if [ "$PKG_INSTALL_ENV" = "development" ]; \
        then yarn install; \
        else yarn install --production; \
        fi

COPY . ./

RUN yarn build
