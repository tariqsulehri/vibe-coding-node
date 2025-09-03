FROM node:24-alpine

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3500

CMD ["node", "src/server.js"]
