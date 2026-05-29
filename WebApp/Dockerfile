FROM node:26-alpine

# Install Bun
# hadolint ignore=DL3016
RUN npm install -g bun

# Verify installations
RUN node --version && npm --version && bun --version

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json bun.lock ./

RUN bun install

COPY . .

CMD ["bun", "run", "start:dev", "--", "--host", "0.0.0.0"]
