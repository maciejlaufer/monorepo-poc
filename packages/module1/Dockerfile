FROM node:16-alpine as builder
RUN apk update; apk add bash
WORKDIR /usr/src/app
COPY . .
RUN cd ./packages/module1 && npm run build

FROM node:16-alpine as node
WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/packages/api/dist/ ./
COPY packages/api/documentation/swagger.yaml ./api/documentation/swagger.yaml
COPY package*.json ./
COPY packages/api/package*.json api/
COPY packages/connector-common/package*.json connector-common/

RUN npm ci --omit=dev --ignore-scripts
RUN cd ./api && npm ci --omit=dev
RUN cd ./connector-common && npm ci --omit=dev

ARG BUILD_NUMBER=UNSET
ENV BUILD_NUMBER=$BUILD_NUMBER
EXPOSE 8080
CMD [ "node", "api/src/server.js" ]
