# Features

<table>
<thead><tr><th>Feature</th><th>Desc</th></tr></thead>
<tbody>
<tr><td>Development, test, production environment</td><td></td></tr>
<tr><td>JWT Auth</td><td>  </td></tr>
<tr><td>RESTFul & API protocol</td><td></td></tr>
<tr><td>Docker</td><td></td></tr>
<tr><td>Postgres</td><td>RDB</td></tr>
<tr><td>MongoDB</td><td>NoSQL</td></tr>
<tr><td>Redis</td><td></td></tr>
<tr><td>Nginx</td><td>Load Balancing</td></tr>
<tr><td>Swagger</td><td>API docs</td></tr>
<tr><td>Prom-client</td><td>Monitoring with Prometheus</td></tr>
<tr><td>Mailer</td><td></td></tr>
</tbody>
</table>

# Development

## develop

### prepare, create .env file, then config it

```dotenv
PORT=8080
MONGO_DB_URI=mongodb://localhost:27017/bunny-rest
SALT_WORK_FACTOR=10
ACCESS_TOKEN_TTL=0.5m
REFRESH_TOKEN_TTL=1y
METRICS_PORT=9090
REDIS_URI=redis://@localhost:6379
```

### start

```shell script
yarn install
docker-compose -f docker-compose.dev.yml up -d --build
yarn dev
```

## Docker development

### prepare, config below in your docker-compose.dev.yml

```
...
    environment:
      - PORT=8080
      - MONGO_DB_URI=mongodb://root_dev:root_dev_password@mongo:27017/bunny_rest_dev?authSource=admin
      - SALT_WORK_FACTOR=10
      - ACCESS_TOKEN_TTL=0.5m
      - REFRESH_TOKEN_TTL=1y
      - METRICS_PORT=9090
      - REDIS_URI=redis://@redis:6379
...
```

### start(all services including Nginx as loading balance, Postgres, MongoDB, Redis)

```shell script
docker-compose -f docker-compose.dev-all.yml up -d --build
```

### start(not including Nginx as loading balance, neither bunny-rest)

```shell script
docker-compose -f docker-compose.dev.yml up -d --build
yarn dev
```

### stop

```shell script
docker-compose -f docker-compose.dev.yml down
```

# Architecture principles

Understand the optimization process, but don't optimize prematurely

## Separation of Concern

## Feature Encapsulation

This means that we group the files related to a single feature together. This has helped me to reuse my codebase across
projects. Let's face it we do not write everything again and again but rather copy-paste the code once perfected to all
the required places. If all the things are clubbed together then it's super easy to achieve this safely. This also helps
in building a logical structure in mind to find a particular file while writing code that needs it as a dependency.

## Better Error Handling

This is very important for the application to be consistent with errors and the corresponding API responses. So,
adopting the separation of concern principle and also the uniformity in the API responses.

## Better Response Handling

The same reason as provided in the above error handling example is also valid for the response handling.

## Better Promise Management

The callback is replaced by Promises and now the Promise chain is replaced by the async/await. This greatly enhances the
coding experience. One problem with this implementation is to write the ugly try/catch block.
<!--## Robust Unit Tests
The primary purpose of Unit-test is not to detect incorrect grammar but to validate behaviors of logics.-->

## Avoiding side effects, always keep functional purity

<!--## Simple Deployability
Dockerfile and docker-compose.yml to simplify the deployment of the application. It is also possible to manually deploy the application.-->




