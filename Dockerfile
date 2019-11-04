FROM node:9-slim
WORKDIR /app
COPY package.json /app
RUN npm install
RUN npm i express body-parser
COPY . /app
CMD ["npm","start"]