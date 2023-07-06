FROM node:18.15.0-alpine

# Set the working directory
WORKDIR /app/client

# Copy package.json and package-lock.json to the working directory
COPY client/package.json ./
COPY client/package-lock.json ./
RUN npm install
COPY . .
# Install dependencies


CMD ["npm", "run", "start"]
