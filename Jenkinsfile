def remote = [:]
pipeline {
    agent { label 'master' }
    stages {
        stage('execute on pi') {
            steps{
                withCredentials([usernamePassword(credentialsId: 'pi_creds', 
                                                  passwordVariable: 'password', 
                                                  usernameVariable: 'userName')]) {
                    remote.user = userName
                    remote.password = password

                    stage("SSH into Raspberry Pi") {
                        sshCommand remote: remote, command: 'docker --version'
                    }
                }
            }
        }
    }
}