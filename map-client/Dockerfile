FROM node:14-slim
WORKDIR /usr/app
COPY package*.json .
RUN npm ci
COPY . .
ENTRYPOINT [ "npm" ]
CMD ["run", "dev" ]