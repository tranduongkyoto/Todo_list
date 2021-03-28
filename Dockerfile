FROM node:v12.18.3-alpine

WORKDIR /app
COPY package.json ./app/
RUN npm install
COPY . /app

EXPOSE 3000
CMD ["npm", "start"]
