#!/bin/bash

echo "Pulling"
git pull

echo "Building application"
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build
#docker-compose -f docker-compose.yml -f docker-compose.prod.yml pull
#docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d --no-deps bunny-rest
