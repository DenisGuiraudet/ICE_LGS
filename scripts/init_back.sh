#!/bin/sh

cd ./services/back

docker-compose down
docker rmi back_app
# docker rmi mongo

sudo docker-compose up
