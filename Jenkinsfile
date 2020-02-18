pipeline {
    agent { label 'master' }
    stages {
        stage('Lets see'){
            withCredentials([usernamePassword(credentialsId: 'pi_creds', passwordVariable: 'password', usernameVariable: 'userName')]) {
                remote.user = userName
                remote.password = password

                stage("SSH into Raspberry Pi") {
                    sshCommand remote: remote, command: 'docker --version'
                }
            }
        }
        stage('ssh into raspberry pi') {
            steps {
                sh 'ssh -tt pi@192.168.1.28'
            }
        }
        stage('make sure we are here') {
            steps {
                sh 'whoami && hostname -I'
            }
        }

    }
}
