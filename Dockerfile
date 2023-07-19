FROM node:19

WORKDIR /bunny-rest

# Always copy the common files
COPY . /bunny-rest

ARG PKG_INSTALL_ENV

# Running yarn install here is different from running in docker-compose*.yml,
# running here the node_modules will be packaged in image
# running in docker-compose*.yml the node_modules will be installed in container,
# and the may be different, since the yarn install will be excuted on different platforms.
# The running on yarn serve should not be placed here, due to here is just for building image
RUN if [ "$PKG_INSTALL_ENV" = "development" ]; \
        then yarn install; \
        else yarn install; \
        fi

