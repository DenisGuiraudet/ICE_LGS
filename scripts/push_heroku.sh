#!/bin/sh

sudo heroku container:push web -a ice-lgs
heroku container:release web -a ice-lgs
