FROM docker.io/library/node:26-alpine@sha256:aadf416b2cdce311a8811ba3f0608a61b77dbf997500e2eafe781b51f6a0b019

# hadolint ignore=DL3016
RUN npm install --global bun@1.3.14

WORKDIR /usr/src/app

COPY --chown=node:node package.json bun.lock ./

USER node

RUN bun install --frozen-lockfile

COPY --chown=node:node . .

EXPOSE 4200

CMD ["bun", "run", "start:dev", "--", "--host", "0.0.0.0"]
