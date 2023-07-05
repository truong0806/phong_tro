# Use an official Node.js runtime as the base image
FROM node:18.15.0-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . .
# Install dependencies
RUN npm run build

CMD ["npm", "run", "start"]
