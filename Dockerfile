FROM node:16-alpine

WORKDIR /app

COPY package.json /app

COPY . /app

ENTRYPOINT ./runfrontend