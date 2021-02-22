FROM node:current-slim
#MAINTAINER James nicholson <jam3s.nicholson@gmail.com>
WORKDIR /apps/tmc-app-client
COPY package.json /apps/tmc-app-client
RUN yarn install
COPY . /apps/tmc-app-client
CMD ["yarn", "start"]