FROM node:alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

RUN npm install -g @angular/cli

COPY . .

RUN npm install

CMD ["ng", "serve", "--host", "0.0.0.0"]
