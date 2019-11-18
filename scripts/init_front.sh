#!/bin/sh

cd ./services/front
docker-compose down
docker rmi front
docker build -t front .
docker run -it -p 8080:8080 --rm --name dockerfront front
