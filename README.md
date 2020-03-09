# Hines Project
### Features

- Angular 9 prject that works on all devices (phone, tablet, and desktop)

### Deployment
- A Jenkins container running on my machine will clone my project to my raspberry pi 3 in a container on port 80
```
Step 1: new commit for branch
Step 2: Jenkins starts build on pi
Step 3: Jenkins runs ansible-playbook
Step 4: playbook builds docker container
Step 5:  docker container runs Express server
End State: Site on port 80 on pi