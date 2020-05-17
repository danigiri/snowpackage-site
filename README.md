# snowpackage-site
A sample website implemented in React to test with snowpackage (using JSX)

With this example website we can see the concepts Morfew and its JS compatibility service can offer for sites implemented in
React and similar frameworks

# Getting started

The easiest way is to use Docker and Docker compose

```shell

# clone the repos, all from the same folder, checking out the same version
git clone https://github.com/danigiri/morfeu.git
cd morfeu && git -c advice.detachedHead=false checkout 0.7.0 && cd ..
git clone https://github.com/danigiri/snow-package.git
cd snow-package && git -c advice.detachedHead=false checkout 0.7.0 && cd ..

# clone the demo site
git clone https://github.com/danigiri/snowpackage-site.git
cd snowpackage-site && git -c advice.detachedHead=false checkout 0.7.0

# start the build and the services (this will take a while), change DOCKERIP for your docker host IP
docker-compose build --build-arg HOSTNAME=DOCKERIP  && docker-compose up

# on a separate window, start the demo site (this will start react)
docker exec -it snowpackage-site /bin/bash -c 'HOST=0.0.0.0 PORT=3010 BROWSER=none /usr/local/bin/npm start

# on another window,  jump into the demo site to make live changes
docker exec -it snowpackage-site /bin/bash

# demo site code is mounted in a volume that will persist between restarts, you need to manually delete it to start from
# scratch
docker volume ls | grep site
# morfeu should be at http://DOCKERIP:8980/
# demo site should be at http://DOCKERIP:3010

```
