FROM node:14.4.0-alpine3.11
WORKDIR /home/media-server
RUN apk add python python2-dev make g++
COPY package*.json /home/media-server
RUN yarn \
  && yarn global add nodemon
COPY . /home/media-server
CMD ["nodemon", "src/index.js"]
