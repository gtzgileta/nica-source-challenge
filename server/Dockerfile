FROM node:14.19.1-alpine
WORKDIR /app
COPY ./package.json ./
RUN npm i
RUN npm install -g ts-node
RUN npm link typescript
COPY . .
COPY ./seed/seeds.sql ./seed/seeds.sql
CMD ["npm", "run", "start"]