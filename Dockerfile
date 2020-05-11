FROM jitesoft/node:13

LABEL maintainer="Daniel Giribet - dani [at] calidos [dot] cat"

# variables for the site
ARG SITE_HOME=/site

# install dependencies (bash to launch angular build, ncurses for pretty output with tput, git for npm deps)
RUN apk add --no-cache curl bash ncurses git
RUN apk add --no-cache --update nodejs npm

#RUN [[ -d $(SITE_HOME} ]] || mkdir -p $(SITE_HOME}

COPY LICENSE /site/LICENSE
COPY NOTICE /site/NOTICE
COPY package-lock.json /site/package-lock.json
COPY package.json /site/package.json

# copy resources and code now
COPY public /site/public
COPY src /site/src

WORKDIR ${SITE_HOME}
RUN npm install
# start
ENTRYPOINT PORT=3010 BROWSER=none npm start

