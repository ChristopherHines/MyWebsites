def remote = [:]
remote.name = 'hines_pi'
remote.host = '192.168.1.28'
remote.allowAnyHosts = true
remote.sudo = false

node ('master') {
    withCredentials([usernamePassword(credentialsId: 'pi_creds', 
                                      passwordVariable: 'password', 
                                      usernameVariable: 'userName')]) {
        remote.user = userName
        remote.password = password
        
        stage('clone down fresh copy of project') {
            sshCommand remote: remote, command: 'rm -rf MyWebsites && git clone https://github.com/ChristopherHines/MyWebsites.git'
        }
        stage('move to working directory') {
            sshCommand remote: remote, command: 'cd MyWebsites'
        }
    }    
}