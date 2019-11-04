FROM node:9-slim
WORKDIR /app
COPY package.json /app
RUN npm install
RUN npm i express body-parser
COPY . /app
RUN npm install pm2 -g

CMD ["node","app.js"]