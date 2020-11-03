FROM jitesoft/node:13

LABEL maintainer="Daniel Giribet - dani [at] calidos [dot] cat"

# build variables for the site, the HOSTNAME needs to be informed to make preview work
ARG SITE_HOME=/site
ENV HOSTNAME=localhost
ENV SITE_HOME=${SITE_HOME}

# install dependencies (bash to launch angular build, ncurses for pretty output with tput, git for npm deps)
RUN apk add --no-cache curl bash ncurses git sed
RUN apk add --no-cache --update nodejs npm

RUN mkdir -p /site-build

COPY LICENSE /site-build/LICENSE
COPY NOTICE /site-build/NOTICE
COPY package-lock.json /site-build/package-lock.json
COPY package.json /site-build/package.json

# copy resources and code now
COPY src /site-build/src
RUN cd /site-build && npm install

COPY public /site-build/public
# this is needed for cp to work with flags like -n
RUN apk add --no-cache --update coreutils

# okay, let's break it down
# react-scripts needs CI=true (or a tty) to run, so we set those env vars TODO: setup as docker env vars
# secondly, we configure the cell presentation URL in the model with a simple sed
# next, we copy all the site from the build location to where SITE_HOME, as this could be a shared volume
# finally, we start the node react dev server with npm start
# by doing this search and replace we ensure that preview works in a different host 
ENV CI=true
ENV HOST=0.0.0.0
ENV PORT=3010 
ENV BROWSER=none
ENTRYPOINT cd ${SITE_HOME} && \
	cp -nr /site-build/* ${SITE_HOME} && \
	sed -i "s/cell-presentation>http:\/\/localhost/cell-presentation>http:\/\/$HOSTNAME/g" \
		${SITE_HOME}/public/snowpackage/model/site-cells.xsd && \
	npm start
# ENTRYPOINT sleep 99999
