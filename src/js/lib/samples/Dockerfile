FROM nodesource/node:6.2.2

RUN mkdir -p /home/nodejs/app/public
WORKDIR /home/nodejs/app

RUN npm install express@4.14.1
COPY ./server.js /home/nodejs/app
COPY ./public /home/nodejs/app/public

CMD ["node", "server.js"]