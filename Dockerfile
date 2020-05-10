FROM node:3-alpine

LABEL maintainer="Daniel Giribet - dani [at] calidos [dot] cat"

# variables for the site
ARG SITE_HOME /site

# install dependencies (bash to launch angular build, ncurses for pretty output with tput, git for npm deps)
RUN apk add --no-cache curl bash ncurses git
RUN apk add --no-cache --update nodejs npm

RUN mkdir -p $(SITE_HOME}
WORKDIR ${SITE_HOME}

COPY LICENSE LICENSE
COPY NOTICE NOTICE
COPY package-lock.json package-lock.json
COPY package.json package.json

# copy code now
COPY src src
RUN npm install

# start
ENTRYPOINT PORT=3010 BROWSER=none react-scripts start

