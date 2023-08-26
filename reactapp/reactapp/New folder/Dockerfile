FROM node:18
ENV NODE_ENV development
WORKDIR /react-app
COPY ./package.json /react-app/
COPY . .
RUN npm install
CMD npm start
EXPOSE 3000