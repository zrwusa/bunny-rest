```yaml
version: '3.7'
services:
  bunny-rest:
    container_name: bunny-rest
    restart: unless-stopped
    environment:
      - NODE_ENV=production
    build:
      context: ./

  caddy:
    image: caddy/caddy:2.2.1-alpine
    container_name: caddy-service
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - $PWD/Caddyfile:/etc/caddy/Caddyfile
      - $PWD/site:/srv
      - caddy_data:/data
      - caddy_config:/config

volumes:
  caddy_data:
  caddy_config:

```

# Docker
## build docker image
```shell script
docker build -t bunny-rest-image ./
```

## build a docker image and start the container, if first-time download the image it will rebuild a new image with Dockerfile, if not first-time download image, it will not rebuild a new image
```shell script
docker-compose up -d
```

## build a docker image and start the container, it will certainly rebuild a new image
```shell script
docker-compose up -d --build
```
or
```shell script
docker build -t bunny-rest-image ./
docker run -d --env-file ./.env -p 8080:8080 --name bunny-rest bunny-rest-image
```

## build a docker image and start the container with merged docker-compose.yml
```shell script
docker-compose -f docker-compose.dev.yml -p bunny-rest-dev up -d --build
```

```shell script
docker-compose -f docker-compose.test.yml -p bunny-rest-test up -d --build
```

```shell script
docker-compose up -d --build
```

## build a docker image and start the container with merged docker-compose.yml only for specified service
```shell script
docker-compose -f docker-compose.dev.yml -p bunny-rest-dev up -d --build bunny-rest-dev
```

## build a docker image and start the container with merged docker-compose.yml only for specified service without checking dependencies, we can use this to redeploy specified service
```shell script
docker-compose -f docker-compose.dev.yml -p bunny-rest-dev up -d --build --no-deps bunny-rest-dev
```

## build a docker image and start the container with merged docker-compose.yml only for specified service without checking dependencies, force recreating container, we can use this to redeploy specified service
```shell script
docker-compose -f docker-compose.dev.yml -p bunny-rest-dev up -d --build --force-recreate --no-deps bunny-rest-dev
```

## build a docker image and start the container with merged docker-compose.yml and renew an anonymous volume (todo)
```shell script
docker-compose -f docker-compose.dev.yml -p bunny-rest-dev up -d --build -V
```

## build a docker image and start the container with merged docker-compose.yml scale containers
```shell script
docker-compose -f docker-compose.dev.yml up -d --scale bunny-rest-dev=2 --build
```

## shut the container and delete everything from the current container, -v means volumes be removed, when you use some DB it will remove your DB data as well
```shell script
docker-compose down -v
```

## shut the container and delete everything from the current container with merged docker-compose.yml
```shell script
docker-compose -f docker-compose.dev.yml -p bunny-rest-dev down
```

```shell script
docker-compose -f docker-compose.test.yml -p bunny-rest-test down
```

```shell script
docker-compose down
```

## shut the container and remove volume
```shell script
docker rm bunny-rest -fv
```

## docker image list
```shell script
docker image ls
```
## start docker container
```shell script
docker run -d --env-file ./.env -p 8080:8080 --name bunny-rest bunny-rest-image
```

##  start docker container, for development sync modified dir by using -v $(pwd),but windows -v %cd% or -v ${pwd}
```shell script
docker run -v $(pwd)/src:/bunny-rest/src:ro --env-file ./.env -p 8080:8080 -d --name bunny-rest bunny-rest-image

```

or
```shell script
docker run -v $(pwd):/bunny-rest:ro -v /bunny-rest/node_modules -p 8080:8080 -d --name bunny-rest bunny-rest-image
```

##  start docker container for production daemon
```shell script
docker run -d -p 8080:8080 --name bunny-rest --restart unless-stopped bunny-rest-image
```
## docker ps(running containers)
```shell script
docker ps
```

## docker ps(all containers)
```shell script
docker ps -a
```
## docker inspect 
```shell script
docker inspect bunny-rest-dev
```

## network inspect 
```shell script
docker network inspect bunny-rest-dev_default
```

## delete image
```shell script
docker image rm bunny-rest-image
```
## prune all volumes
```shell script
docker system prune --volumes
```

## check logs
```shell script
docker logs bunny-rest-dev -f
```

## bunny-rest-dev container bash
```shell script
docker exec -it bunny-rest-dev /bin/bash
```

## test docker
```shell script
curl -i localhost:8080/api/v1/ping
```
## mongo-dev container mongo console
```shell script
docker exec -it mongo-dev mongo -u "root_dev" -p "root_dev_password"
```

## in .profile file
```shell script
set -o allexport; source /root/.env; set +o allexport;
```


## deploy 
```shell script
docker login
```

## rename the image and push it to Docker Hub, before that you have to ensure the code has been changed from the previous version
```shell script
docker image tag bunny-rest <dockerhub_username>/bunny-rest
docker push <dockerhub_username>/bunny-rest


docker-compose build bunny-rest
docker-compose push bunny-rest
```

## watchtower
```shell script
docker run -d --name watchtower -e WATCHTOWER_TRACE=true -e WATCHTOWER_DEBUG=true -e WATCHTOWER_POLL_INTERVAL=50 -v /var/run/docker.sock:/var/run/docker.sock containrrr/watchtower bunny-rest
```

## stop watchtower
```shell script
docker rm watchtower -f
```

## docker info
```shell script
docker info
```

## docker swarm
```shell script
docker swarm init --advertise-addr <public IP of server>
docker stack deploy -c docker-compose.yml -c docker-compose.prod.swarm.yml bunny-rest-stack
docker stack ls
docker node ls
docker stack services bunny-rest-stack
docker service ls
docker stack ps bunny-rest-stack
```



# ORM
I'd say that if you aren't dealing with objects there's little point in using an ORM.

If your relational tables/columns map 1:1 with objects/attributes, there's not much point in using an ORM.

If your objects don't have any 1:1, 1:m, or m:n relationships with other objects, there's not much point in using an ORM.

If you have complex, hand-tuned SQL, there's not much point in using an ORM.

If you've decided that your database will have stored procedures as its interface, there's not much point in using an ORM.

If you have a complex legacy schema that can't be refactored, there's not much point in using an ORM.

So here's the converse:

If you have a solid object model, with relationships between objects that are 1:1, 1:m, and m:n, don't have stored procedures, and like the dynamic SQL that an ORM solution will give you, by all means use an ORM.

Decisions like these are always a choice. Choose, implement, measure, evaluate.


```shell script
psql -d database -U  user -W

```
```postgresql
\l
```
```postgresql
\c <database_name>
```

Popular @
Popular #
Engagement Rate

Similar Accounts
Notable Followers
Brand Affinity
Mentioned By
Est. Price
Cost Per Engagement
Popular Posts
Sponsored Posts
