pipeline {
    agent {
    node {
        label 'Jenkins-agent1'
    }
}

    stages {
        
        stage('Git Clone Lab1') {
            steps {
                git branch: 'main', url: 'https://github.com/msannan/tkxel-labs.git'
            }
        }
        
        stage('Git Clone Lab6') {
            steps {
                git branch: 'main', url: 'https://github.com/msannan/tkxel-lab6.git'
            }
        }
        
        stage('Sonar Tests')
        {
            steps
            {
                dir('my-app')
                {
                  sh 'sonar-scanner   -Dsonar.projectKey=Lab6   -Dsonar.sources=.   -Dsonar.host.url=http://192.168.18.165:9000   -Dsonar.login=sqp_3ad2e8b9d210e22bd1356db7bddf43b983bf30cb'
            
                }
            }
        }
        
       /* stage('Create Node Container and Output Version') {
            steps {
                sh "docker run -d --name node node /bin/bash -c 'node --version && echo sannan'"
                sh "docker logs node"
                sh "docker rm -f node"
            }
        }
        stage('Create Maven Container and Output Version') {
            steps {
                sh "docker run -d --name maven maven /bin/bash -c 'mvn -v && echo sannan'"
                sh "docker logs maven"
                sh "docker rm -f maven"
                
            }
        }*/
    }
post {
    success {
      mail bcc: '', body: 'build successfully', cc: '', from: '', replyTo: '', subject: 'Jenkins- lab6', to: 'muhammad.sannan@tkxel.io'
    }
        failure {
      mail bcc: '', body: 'build failure', cc: '', from: '', replyTo: '', subject: 'Jenkins- lab6', to: 'muhammad.sannan@tkxel.io'
    }
  }
}
