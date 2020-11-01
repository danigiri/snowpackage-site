FROM jitesoft/node:13

LABEL maintainer="Daniel Giribet - dani [at] calidos [dot] cat"

# build variables for the site, the HOSTNAME needs to be informed to make preview work
ARG SITE_HOME=/site
ENV HOSTNAME=localhost
ENV SITE_HOME=${SITE_HOME}

# install dependencies (bash to launch angular build, ncurses for pretty output with tput, git for npm deps)
RUN apk add --no-cache curl bash ncurses git sed
RUN apk add --no-cache --update nodejs npm

#RUN [[ -d $(SITE_HOME} ]] || mkdir -p $(SITE_HOME}

COPY LICENSE ${SITE_HOME}/LICENSE
COPY NOTICE ${SITE_HOME}/NOTICE
COPY package-lock.json ${SITE_HOME}/package-lock.json
COPY package.json ${SITE_HOME}/package.json

# copy resources and code now
COPY src ${SITE_HOME}/src
RUN cd ${SITE_HOME} && npm install

COPY public ${SITE_HOME}/public
RUN cd ${SITE_HOME} && cp -r . /site-backup

# okay, let's break it down
# react-scripts needs CI=true (or a tty) to run, so we set those env vars TODO: setup as docker env vars
# secondly, we configure the cell presentation URL in the model with a simple sed
# next, we copy all the site to a 2nd location, as this location could be in the container or could be a volume
# finally, we start the node react dev server with npm start
# by doing this search and replace we ensure that preview works in a different host 
ENTRYPOINT CI=true HOST=0.0.0.0 PORT=3010 BROWSER=none cd ${RUNTIME_HOME} && \
	cp -nr /site-backup ${SITE_HOME} && \
	sed -i "s/cell-presentation>http:\/\/localhost/cell-presentation>http:\/\/$HOSTNAME/g" \
		${SITE_HOME}/public/snowpackage/model/site-cells.xsd && \
	npm start
#ENTRYPOINT sleep 999999
