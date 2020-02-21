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
        
        stage('clone down project') {
            sshCommand remote: remote, command: 'git'
        }
    }    
}                                          g 