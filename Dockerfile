FROM jitesoft/node:13

LABEL maintainer="Daniel Giribet - dani [at] calidos [dot] cat"

# variables for the site, the HOSTNAME needs to be informed to make preview work
ARG SITE_HOME=/site
ARG HOSTNAME=localhost

# install dependencies (bash to launch angular build, ncurses for pretty output with tput, git for npm deps)
RUN apk add --no-cache curl bash ncurses git sed
RUN apk add --no-cache --update nodejs npm

#RUN [[ -d $(SITE_HOME} ]] || mkdir -p $(SITE_HOME}

COPY LICENSE /site/LICENSE
COPY NOTICE /site/NOTICE
COPY package-lock.json /site/package-lock.json
COPY package.json /site/package.json

# copy resources and code now
COPY src /site/src
RUN cd /site && npm install

COPY public /site/public
# by doing this search and replace we ensure that preview works in a different host 
RUN sed -i "s/cell-presentation>http:\/\/localhost/cell-presentation>http:\/\/$HOSTNAME/g" \
	/site/public/snowpackage/model/site-cells.xsd

# start
WORKDIR ${SITE_HOME}
# react-scripts needs CI=true (or a tty) to run
ENTRYPOINT CI=true HOST=0.0.0.0 PORT=3010 BROWSER=none npm start
#ENTRYPOINT sleep 999999
