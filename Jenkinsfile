def remote = [:]
remote.name = 'hinespi'
remote.host = '192.168.1.28'
remote.allowAnyHosts = true
remote.sudo = false

node ('master') {
    withCredentials([usernamePassword(credentialsId:    'pi_creds', 
                                      passwordVariable: 'password', 
                                      usernameVariable: 'userName')]) {
        remote.user = userName
        remote.password = password
        
        stage('clone down project') {
            sshCommand remote: remote, 
                       command: 'rm -rf MyWebsites && git clone --branch feature/pi_deploy https://github.com/ChristopherHines/MyWebsites.git'
        }
        stage('run playbook') {
            sshCommand remote: remote, 
                       command: 'ansible-playbook MyWebsites/ansible/build_deploy.yml'
        }        
    }    
}