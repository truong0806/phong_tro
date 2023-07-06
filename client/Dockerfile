FROM node:18.15.0-alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN yarn install
COPY . .
RUN yarn build
EXPOSE 3000
LABEL image.name="client-app-docker"
CMD ["npm", "run", "start"]