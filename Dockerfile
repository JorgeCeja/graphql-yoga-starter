FROM node:8.11.1-alpine

WORKDIR /usr/app

COPY package.json .
RUN npm install -g -s --no-progress yarn && yarn

COPY . .