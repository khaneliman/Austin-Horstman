FROM oven/bun:alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json bun.lock ./

RUN bun install

COPY . .

CMD ["bun", "run", "start:dev", "--", "--host", "0.0.0.0"]
