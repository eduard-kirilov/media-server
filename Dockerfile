FROM node:14.1.0-alpine3.11
WORKDIR /home/media-server
COPY . /home/media-server
RUN yarn \
  && yarn global add nodemon
ENV PORT=${PORT}
CMD ["nodemon", "src/index.js"]
