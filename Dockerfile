FROM snow-package:0.0.2

LABEL maintainer="Daniel Giribet - dani [at] calidos [dot] cat"

# variables for the site
ARG SITE_HOME /site

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

