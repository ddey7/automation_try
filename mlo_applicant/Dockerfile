# Bring base Image
FROM node:16

# create a working dir in docker
WORKDIR /try/mlo_applicant


COPY package*.json ./

# run installer to install all npm packages
RUN npm install
RUN npm install pm2 -g

# bring all the files from pc to docker
COPY ./ ./

# CMD pm2-runtime ./bin/www --name mlo_applicant --no-daemon 
# default command to start the project
# CMD ["npm","start"]
# using pm2
CMD ["pm2-runtime","node","index.js","--name", "mlo_applicant","--no-daemon"]
