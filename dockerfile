FROM node:16-alpine

WORKDIR /frontend

COPY package*.json ./


RUN npm install

RUN npm run sync

RUN npm run build

COPY . .

EXPOSE 3000

CMD npm run start