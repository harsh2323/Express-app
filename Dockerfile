FROM node:10

WORKDIR /Users/harshshah/Express-app

COPY . /Users/harshshah/Express-app

RUN npm install --save express@4.15.2 && npm install express --save

CMD ["node", "app.js"]

