# microservice-with-nodejs-react
This is a demo repo to demonstrate micro services example in node js and react.

There are 6 different folder for each different service of node js or ui application in react.

post - creating, listing of posts
comment- creating, listing of comments
moderation - to moderate comments
query - to save merged data of posts and comments, which will be accessed by client in front end 
event-bus - to manage events in whole application
client - gui in react

To run the application need to open command prompt from all different folder.
client -> yarn start
post, comment, moderation, query, event-bus -> npm start

Docker commands
create, run, ps, build, stop, kill, exec, system purge 
docker ps --all
docker exec -it container_id command/process to start
docker run imageId/tag

kubernaties commands
kubectl version
kubectl get pods
kubectl get deployments
kubectl describe pod posts
kubectl describe deployments posts-depl
kubectl apply -f posts-depl.yaml
kubectl delete deployment posts-depl
kubectl delete pod posts
kubectl logs pod_name
kubectl apply -f posts-srv.yaml
kubectl get services
kubectl describe service posts-srv

kubernaties cluster - A collection of nodes + a master to manage them
Node - a virtual machine that will run containers

kubernaties services
cluster ip service - to expose all apis internally
load balancer service - to expose whole application to outside world
nodeport service - for development purpose expose api to outside world

build and push a docker image
docker build -t nimesh14/query .
docker push nimesh14/query