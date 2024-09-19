# Snow Package example site
A sample website implemented in React to test with snowpackage (using JSX)

With this example website we can see the concepts Morfeu and its JS compatibility service can offer for sites implemented in React and similar frameworks.

This [blog post](http://dani.calidos.cat/visual-drag-and-drop-a-b-web-testing/) explains the concept in more detail, showcasing how we can do drag and drop A/B testing visually with this system.

Please refer to the [Morfeu](https://github.com/danigiri/morfeu) documentation for further information.

## Getting started

### Docker

The easiest way is to use Docker and Docker Compose

```shell

export DOCKERIP=<your docker ip here>

# clone the repos, all from the same folder, checking out the same version
git clone https://github.com/danigiri/morfeu.git
cd morfeu && git fetch && git -c advice.detachedHead=false checkout v0.8.19 && cd ..
git clone https://github.com/danigiri/snow-package.git
cd snow-package && git fetch && git -c advice.detachedHead=false checkout v0.8.20 && cd ..

# clone the demo site
git clone https://github.com/danigiri/snowpackage-site.git
cd snowpackage-site && git fetch && git -c advice.detachedHead=false checkout v0.8.12

# start the build and the services (this will take a while), remember DOCKERIP neeeds to be 
## your docker host IP
docker-compose build --build-arg HOSTNAME=$DOCKERIP && docker-compose up

# on another window,  jump into the demo site to make live changes
docker exec -it snowpackage-site /bin/bash

# demo site code is mounted in a volume that will persist between restarts, you need to manually delete it to start from
# scratch
docker volume ls | grep site
# morfeu should be at http://DOCKERIP:8980/?config=%2Fproxy%2Fsite%2Fsnowpackage%2Fconfig.json
# demo site should be at http://DOCKERIP:3010

```

### Kubernetes

The whole system can be run in Kubernetes without a problem. The container images can be built using [Argo Workflows](https://argoproj.github.io/argo/), [Kaniko](https://github.com/GoogleContainerTools/kaniko) and deployed using [ArgoCD](https://argoproj.github.io/argo-cd/). Kubernetes object files and Helm charts can be found in this separate github [project](https://github.com/danigiri/kubernetes-doodles).

#### Morfeu
  - Argo workflow – [morfeu-workflow.yaml](https://github.com/danigiri/kubernetes-doodles/blob/master/morfeu/workflow/morfeu-workflow.yaml)
  - Helm chart for ArgoCD, with deployment, service and ingress objects – [link](https://github.com/danigiri/kubernetes-doodles/tree/master/morfeu/helm)

After creating the ArgoCD application from the helm chart and before synching, you need to run

`argocd app set morfeu -p image.args='{-D__RESOURCES_PREFIX=http://snow-package-service.snowpackage-site.svc.cluster.local:8990/,-D__PROXY_PREFIX=http://snow-package-service.snowpackage-site.svc.cluster.local:8990}'`

to point the Morfeu configuration to the Snow Package internal service.

#### Persistent Volume
The code for the React site sits on a Persistent Volume ([docs](https://kubernetes.io/docs/concepts/storage/persistent-volumes/)) which is shared between the SnowPackage microservice and the actual React application. As defined by the Morfeu model, SnowPackage does not sit in the critical path of the React appliation, and can be turned off at will.

The [snowpackage-site-pvc.yaml](https://github.com/danigiri/kubernetes-doodles/blob/master/snowpackage-site/storage/snowpackage-site-pvc.yaml) Kubernetes object definition file, which specifies a Persistent Volume claim called `snowpackage-site-pvc`.

Snow-package
  - Argo workflow – [link](https://github.com/danigiri/kubernetes-doodles/tree/master/snow-package/workflow)
  - YAML files for Argo CD, with deployment and service object files [link](https://github.com/danigiri/kubernetes-doodles/tree/master/snow-package), in this case, the link to React app service is hardcoded in the deployment container `args` but it can be easily changed or turned into a configurable Helm chart.

Snowpackage-site
  - Argo workflow – [link](https://github.com/danigiri/kubernetes-doodles/blob/master/snowpackage-site/workflow/snowpackage-site-workflow.yaml)
  - YAML files for Argo CD, with deployment and service object files [link](https://github.com/danigiri/kubernetes-doodles/tree/master/snowpackage-site) which will deploy the app, the service and an ingress. The app is deployed in development mode to be able to refresh whenever changes are made in Morfeu.


## Architecture

![Architecture](./site/img/architecture.png)

Morfeu presents the UI to the user, requests for JSX are routed to the Snow Package service that has the path to the JSX files in the React application.


## How it looks

# Development

    # build the morfeu library
    cd morfeu && \
        mvn package war:war install \
        -DarchiveClasses=true -DattachClasses=true -DskipITs -DskipTests=true -Djetty.skip -Dskip-build-client=true 
    
    # start morfeu pointing at the host and port where we will run the snow package app
    cd morfeu && mvn compile jetty:run \
        -D__RESOURCES_PREFIX=http://localhost:8990/ \
        -D__PROXY_PREFIX=http://localhost:8990
    
    cd snow-package && \ 
        mvn resources:resources jetty:run \
        -D__RESOURCES_PREFIX=file://$(pwd)/../snowpackage-site/src/snowpackage/ \
        -D__PROXY_PREFIX=http://localhost:3010
    
    # start the morfeu frontend
    cd morfeu/src/main/angular && ng serve --port 3000 --proxy-config proxy.conf.js --liveReload=true
    

## License

> Copyright 2020 Daniel Giribet
>
> Licensed under the Apache License, Version 2.0 (the "License");
> you may not use this file except in compliance with the License.
> You may obtain a copy of the License at

>   http://www.apache.org/licenses/LICENSE-2.0

> Unless required by applicable law or agreed to in writing, software
> distributed under the License is distributed on an "AS IS" BASIS,
> WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
> See the License for the specific language governing permissions and
> limitations under the License.

