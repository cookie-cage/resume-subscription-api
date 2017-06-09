FROM node:8.0.0-alpine

MAINTAINER Cookie Cage

WORKDIR /opt/app

COPY .env .env
COPY resources resources
COPY index.js index.js
COPY package.json package.json
COPY node_modules node_modules
COPY README.md README.md

HEALTHCHECK --interval=10s --timeout=3s \
    CMD curl -f http://localhost/healthcheck || exit 1

CMD ["npm", "start"]
