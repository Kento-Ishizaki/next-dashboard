FROM node:20.9.0-alpine

WORKDIR /app

RUN apk add --no-cache \
    git \
    make \
    && rm -rf /var/cache/apk/*

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
CMD ["npm", "run", "dev"]
