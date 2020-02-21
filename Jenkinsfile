def remote = [:]
remote.name = 'test'
remote.host = ''
remote.allowAnyHosts = true
remote.sudo = false

node ('master') {
    withCredentials([usernamePassword(credentialsId: 'pi_creds', 
                                  passwordVariable: 'password', 
                                  usernameVariable: 'userName')]) {
        remote.user = userName
        remote.password = password
        
        stage('SSH Test') {
            sshCommand remote: remote, command: 'echo "Hello World!"'
            sshCommand remote: remote, command: 'echo "still working"'
            sshCommand remote: remote, command: 'echo "testing"'
        }
    }    
}