# Bring base Image
FROM node:16

# create a working dir in docker
WORKDIR /try/mlo_admin

COPY package*.json ./

# run installer to install all npm packages
RUN npm install

# bring all the files from pc to docker
COPY ./ ./

# default command to start the project
CMD ["npm","start"]
# using pm2
#CMD ["pm2-runtime","start","./bin/www","mlo_admin"]
