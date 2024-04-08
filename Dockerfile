# Use Node.js version 14
FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Specify the command to run the app
CMD [ "npm", "start" ]
