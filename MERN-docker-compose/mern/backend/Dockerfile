# Use the official Node.js 18 image as the runtime environment.
FROM node:18.9.1

# Set the working directory for the backend application.
WORKDIR /app

# Copy package metadata first so dependency installation can be cached.
COPY package.json .

# Install backend dependencies.
RUN npm install

# Copy the remaining backend source files into the container.
COPY . .

# Expose the backend API port.
EXPOSE 5050

# Start the Express server.
CMD [ "npm", "start" ]