FROM node:18-alpine
# Installing libvips-dev for sharp Compatibility
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev && rm -rf /var/cache/apk/* > /dev/null 2>&1

WORKDIR /opt/

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn config set network-timeout 600000 -g && yarn install

ENV PATH /opt/node_modules/.bin:$PATH

WORKDIR /opt/app

COPY . .

ENV NODE_ENV=production

RUN yarn build

EXPOSE 1337

CMD ["yarn", "start"] 