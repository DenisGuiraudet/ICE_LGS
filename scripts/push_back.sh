#!/bin/sh

cd ./services/back

heroku container:login

sudo heroku container:push web -a ice-lgs-back
heroku container:release web -a ice-lgs-back
