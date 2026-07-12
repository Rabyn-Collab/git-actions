FROM node:24


ENV MONGODB_CONNECTION_PROTOCOL mongodb+srv
ENV MONGO_DB_NAME gha-demo
ENV MONGODB_CLUSTER_ADDRESS cluster0.y6qxb1s.mongodb.net
ENV MONGODB_USERNAME rabins986
ENV MONGODB_PASSWORD pass999


WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

CMD [ "npm", "start" ]