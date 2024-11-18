FROM node:16-alpine AS ionic
WORKDIR /usr/src/app
RUN npm install -g @ionic/cli
COPY package*.json ./
RUN npm i -f
COPY . .
RUN ionic build
FROM nginx:alpine
COPY --from=ionic  /usr/src/app/www /usr/share/nginx/html
