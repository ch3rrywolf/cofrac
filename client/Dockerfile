FROM node:14

WORKDIR /FrontSide

COPY package*.json ./

RUN npm install -g npm@6 && npm install --legacy-peer-deps

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "dev" ]