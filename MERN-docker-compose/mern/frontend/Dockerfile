# Use the official Node.js 18 image as the build/runtime environment.
FROM node:18.9.1

# Set the working directory inside the container.
WORKDIR /app

# Copy only package metadata first to leverage Docker cache for dependencies.
COPY package.json .

# Install application dependencies.
RUN npm install

# Copy the rest of the frontend source code into the container.
COPY . .

# Expose the Vite dev server port.
EXPOSE 5173

# Start the frontend development server.
CMD ["npm", "run", "dev"]