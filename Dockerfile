FROM hypriot/rpi-iojs:1.4.1
MAINTAINER Christopher Hines <christopherhines2016@gmail.com>

# Adding source files into container
ADD src/ /src

# Define working directory
WORKDIR /src

# Install app dependencies
RUN npm install

# Open Port 4900
EXPOSE 4900

# Run Node.js
CMD ["node", "index.js"]
