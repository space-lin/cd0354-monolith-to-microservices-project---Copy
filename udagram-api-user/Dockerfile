FROM node:16-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm i -f
COPY . .
EXPOSE 8080
CMD [ "npm", "run", "prod" ]