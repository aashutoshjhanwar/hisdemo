# Stage 1: Build Angular application
# Use a Node.js Alpine image for the build step
FROM node:alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install Angular CLI
RUN npm install -g @angular/cli

# Install dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Build the Angular application in production mode
RUN ng build

# Stage 2: Setup Nginx to serve Angular application
EXPOSE 4202

CMD ["ng serve", "--host", "0.0.0.0"]