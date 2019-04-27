# base image
FROM nginx:alpine as base

COPY /Spa/nginx.conf /etc/nginx/nginx.conf

FROM node:10 as build

# https://mherman.org/blog/dockerizing-an-angular-app/
# install chrome for protractor tests
# RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
# RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
# RUN apt-get update && apt-get install -yq google-chrome-stable

# https://github.com/angular/angular-cli/issues/6848
USER root
RUN npm config set user root

# set working directory
WORKDIR /app

# add `/usr/src/app/node_modules/.bin` to $PATH
# ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY /Spa/oauth-client/package.json .
COPY /Spa/oauth-client/package-lock.json .
RUN npm install
RUN npm install -g node-sass
RUN npm install -g @angular/cli@1.7.1

# add app 
COPY /Spa/oauth-client .

# Need to change the config files to utilise the enviroment vars

ENV SPA_CLIENT_BUILD_COMMAND=build-prod
# start app
# CMD ng serve --host 0.0.0.0:4200
RUN npm run ${SPA_CLIENT_BUILD_COMMAND}

# Final container
FROM base as client

COPY --from=build /app/dist .
EXPOSE 4200
CMD ["nginx", "-g", "daemon off;"]