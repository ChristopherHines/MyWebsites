FROM node:12-alpine

# Adding source files into container
ADD angular-project/express /src

# Define working directory
WORKDIR /src

# Install app dependencies
RUN npm install

# Open Port 4900
EXPOSE 80

# Run Node.js
CMD ["node", "index.js"]