FROM node:15

WORKDIR /usr/src/app

COPY . .

RUN npm install --save

CMD ["node","app.js"]