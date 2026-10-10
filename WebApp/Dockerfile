FROM docker.io/library/node:26-alpine@sha256:2d984a15c9b54fd0aeb608b8e0d0d83529eb34d2966db27a1fb4f1edc3d298a3

# hadolint ignore=DL3016
RUN npm install --global bun@1.3.14

WORKDIR /usr/src/app

RUN chown node:node /usr/src/app

COPY --chown=node:node package.json bun.lock ./

USER node

RUN bun install --frozen-lockfile

COPY --chown=node:node . .

EXPOSE 4200

CMD ["bun", "run", "start:dev", "--", "--host", "0.0.0.0"]
