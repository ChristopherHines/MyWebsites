pipeline {
    agent { label 'master' }
    stages {
        stage('ssh into raspberry pi') {
            steps {
                sh 'ssh pi@192.168.1.28'
            }
        }
        stage('make sure we are here') {
            steps {
                sh 'whoami && hostname -I'
            }
        }
    }
}
