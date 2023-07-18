FROM node:19

WORKDIR /bunny-rest

COPY ./* ./

ARG PKG_INSTALL_ENV

RUN if [ "$PKG_INSTALL_ENV" = "development" ]; \
        then yarn install; \
        else yarn install && yarn build; \
        fi

