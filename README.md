# Hines Project

### Project layout

- Angular 9 web app
- python3 Flask API
- sqlite3 database

### Deployment
- A Jenkins instance running from a laptop will clone my project to my raspberry pi 3, and use 
Ansible to spin up node and python3 containers on port 80 and 2000 respectively. The node container
has an Express.js server that will serve the web app, and the python3 container runs a Flask API.
```
Step 1: New commit for branch
Step 2: Jenkins logs onto pi and clones down project
Step 3: Jenkins runs ansible-playbook
Step 4: Ansible playbook builds docker containers
Step 5: Docker container runs Express server and Flask API

End State: Site on port 80 and API on port 2000 of pi