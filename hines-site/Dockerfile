FROM node:12-alpine

# Define working directory
WORKDIR /src

# Install Angular
RUN npm install -g @angular/cli@latest

# Put package.json in container
COPY package.json /src

# Install required dependencies
RUN npm install

# Put source code in container
COPY ./ /src

# Build web app
RUN ng build

# Move to express server 
WORKDIR /src/express

# Install express server code
RUN npm install

# Expose port 80
EXPOSE 80

# Run Node.js
CMD ["node", "index.js"]
