FROM node:12-alpine

# Adding source files into container
ADD express /src

# Define working directory
WORKDIR /src

# Install app dependencies
RUN npm install

# Expose port 443
EXPOSE 443

# Run Node.js
CMD ["node", "index.js"]