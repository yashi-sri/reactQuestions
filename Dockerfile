# Use the official Node.js image as the base image
FROM node:22-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port Vite uses (default is 3000)
EXPOSE 3000

# Command to run the Vite development server
CMD ["npm", "run", "dev", "--", "--host"]
