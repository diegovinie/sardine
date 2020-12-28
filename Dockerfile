FROM node:10.19.0-alpine AS PROD

# add npm binaries to shell path
ENV PATH /app/node_modules/.bin:$PATH

EXPOSE 8001/tcp

# copy the frontend (ecept .dockerignore) to image
COPY . /app

# all following commands will be executed in /app
WORKDIR /app

RUN npm install --silent

ENTRYPOINT ["npm","run","prod"]
