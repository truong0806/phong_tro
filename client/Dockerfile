# Use an official Node.js runtime as the base image
FROM node:18.15.0-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install project dependencies
RUN yarn install --force

# Copy project files to the working directory
COPY . .

# Build the React app
RUN yarn run build

# Set the command to run when the container starts
CMD ["npm", "start"]
