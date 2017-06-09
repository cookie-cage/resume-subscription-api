# resume-subscription-api
Subscription API for resume ecosystem.

[![Build Status](https://travis-ci.org/cookie-cage/resume-subscription-api.svg?branch=master)](https://travis-ci.org/cookie-cage/resume-subscription-api)

**pre-requisites**
- nodejs (v8.1.0)
- docker (v17.03.1-ce)
- docker-compose (v1.13.0)

## usage

## download dependencies
```shell
docker-compose -f docker-compose.vendor.yml up --build
```

## build docker image
```shell
docker-compose -f docker-compose.build.yml build
```

## fix file permissions
```shell
sudo chown $USER:$USER -R `pwd`/node_modules
```

## run
```shell
docker-compose up
```
