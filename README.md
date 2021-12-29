#Features
<table>
<thead><tr><th>Feature</th><th>Desc</th></tr></thead>
<tbody>
<tr><td>Development, test, production environment</td><td></td></tr>
<tr><td>JWT Auth</td><td>  </td></tr>
<tr><td>RESTFul & API protocol</td><td></td></tr>
<tr><td>Mysql Sequelize</td><td></td></tr>
<tr><td>MongoDB Mongoose</td><td></td></tr>
<tr><td>Redis</td><td></td></tr>
<tr><td>Mailer</td><td></td></tr>
<tr><td>Push Notification</td><td></td></tr>
<tr><td>Https localhost Self Signed Certification</td><td></td></tr>
</tbody>
</table>

# Architecture principles

## Separation of Concern

## Feature Encapsulation

This means that we group the files related to a single feature together. This has helped me to reuse my codebase across projects. Let's face it we do not write everything again and again but rather copy-paste the code once perfected to all the required places. If all the things are clubbed together then it's super easy to achieve this safely. This also helps in building a logical structure in mind to find a particular file while writing code that needs it as a dependency.

## Better Error Handling
This is very important for the application to be consistent with errors and the corresponding API responses. So, adopting the separation of concern principle and also the uniformity in the API responses.
## Better Response Handling
The same reason as provided in the above error handling example is also valid for the response handling. 
## Better Promise Management
The callback is replaced by Promises and now the Promise chain is replaced by the async/await. This greatly enhances the coding experience. One problem with this implementation is to write the ugly try/catch block.
<!--## Robust Unit Tests
The primary purpose of Unit-test is not to detect incorrect grammar but to validate behaviors of logics.-->

<!--## Simple Deployability
Dockerfile and docker-compose.yml to simplify the deployment of the application. It is also possible to manually deploy the application.-->


#Development

## develop
```shell script
yarn install
yarn dev
```

## build docker image
```shell script
docker build -t bunny-rest-image ./
```

## docker image list
```shell script
docker image ls
```
## start docker container
```shell script
docker run -d -p 49162:8080 --name bunny-rest bunny-rest-image
```

##  start docker container, for development sync modified dir by using -v $(pwd),but windows -v %cd% or -v ${pwd}
```shell script
docker run -v $(pwd)/src:/bunny-rest/src -p 49162:8080 -d --name bunny-rest bunny-rest-image

```

##  start docker container for production daemon
```shell script
docker run -d -p 49162:8080 --name bunny-rest --restart unless-stopped bunny-rest-image
```
## docker ps(containers)
```shell script
docker ps
```

## delete container
```shell script
docker rm bunny-rest -f
```

## delete image
```shell script
docker image rm bunny-rest-image
```

## check logs
```shell script
docker logs bunny-rest
```

## docker container  bash
```shell script
docker exec -it bunny-rest /bin/bash
```

## test docker
```shell script
curl -i localhost:49162/api/public/ping
```
