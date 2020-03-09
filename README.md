#Hines Project
### Features

- Angular 9 prject that works on all devices (phone, tablet, and desktop)

###Deployment
- A Jenkins container running on my machine will clone my project to my raspberry pi 3 in a container on port 80

###FlowChart

```flow
st=>start: new commit for branch
op=>operation: Jenkins starts build on pi
op2=>operation: Jenkins runs ansible-playbook
op3=>operation: playbook builds docker container
op4=>operation:  docker container runs Express server
e=>end: Site on port 80 on pi

st->op->op2->op3->op4->e

```