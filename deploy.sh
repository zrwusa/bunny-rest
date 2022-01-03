#!/bin/bash

echo "Pulling"
git pull

echo "Building application"
docker-compose up -d --build
#docker-compose pull
#docker-compose up -d --no-deps bunny-rest
