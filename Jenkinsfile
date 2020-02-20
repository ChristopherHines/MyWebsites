// def remote = [:]
// pipeline {
//     agent { label 'master' }
//     stages {
//         stage('execute on pi') {
//             steps{
//                 withCredentials([usernamePassword(credentialsId: 'pi_creds', 
//                                                   passwordVariable: 'password', 
//                                                   usernameVariable: 'userName')]) {
//                     step{
//                         remote.user = userName
//                         remote.password = password
//                     }
//                     stage("SSH into Raspberry Pi") {
//                         sshCommand remote: remote, command: 'docker --version'
//                     }
//                 }
//             }
//         }
//     }
// }
withCredentials([usernamePassword(credentialsId: 'pi_creds', 
                                  passwordVariable: 'password', 
                                  usernameVariable: 'userName')]) {
    def remote = [:]
    remote.name = 'test'
    remote.host = '192.168.1.28'
    remote.user = userName
    remote.password = password
    remote.allowAnyHosts = true
    stage("SSH into Raspberry Pi") {
        sshCommand remote: remote, command: 'docker --version'
    }
}