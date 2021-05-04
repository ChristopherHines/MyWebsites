def remote = [:]
remote.name = 'hinespi'
remote.host = '192.168.1.28'
remote.allowAnyHosts = true
remote.sudo = false

node ('master') {
    stage('clone down project'){
        sh('rm -rf MyWebsites && git clone --branch feature/pihole-walkthrough https://github.com/ChristopherHines/MyWebsites.git')
    }
    stage('build web app'){
        nodejs(nodeJSInstallationName: 'nodejs'){
            sh('npm install -g @angular/cli@latest')
            sh('cd MyWebsites/hines-site && npm install')
            sh('cd MyWebsites/hines-site && ng build')
            sh('cd MyWebsites/hines-site && rm -rf node_modules')
            sh('scp -rf MyWebsites pi@192.168.1.28:/home/pi/deployment')        
        }
    }

    withCredentials([usernamePassword(credentialsId:    'pi_creds', 
                                      passwordVariable: 'password', 
                                      usernameVariable: 'userName')]) {
        remote.user = userName
        remote.password = password
        
        stage('run playbook') {
            sshCommand remote: remote, 
                       command: 'ansible-playbook deployment/MyWebsites/ansible/build_deploy.yml'
        }        
    }    
}