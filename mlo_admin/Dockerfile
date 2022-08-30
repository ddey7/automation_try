# Bring base Image
FROM node:16

# create a working dir in docker
WORKDIR /try/mlo_admin

# bring all the files from pc to docker
COPY ./ ./

# run installer to install all npm packages
RUN npm install
#RUN npm install pm2 -g

# default command to start the project
CMD ["npm","start"]
# using pm2
#CMD ["pm2-runtime","start","./bin/www","mlo_admin"]
