# Bring base Image
FROM node:16

# create a working dir in docker
WORKDIR /try/mlo_admin

COPY package*.json ./

# run installer to install all npm packages
RUN npm install
RUN npm i -g pm2

# bring all the files from pc to docker
COPY ./ ./

#CMD pm2-runtime ./bin/www --name mlo_admin --no-daemon

# default command to start the project
# CMD ["npm","start"]
#using pm2
CMD ["pm2-runtime","start","/try/mlo_admin/bin/www","--name","mlo_admin","--no-daemon"]
