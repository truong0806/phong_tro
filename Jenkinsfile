pipeline {
    agent any
    stages {
        stage('Clone Project') {
            steps {
                git branch: 'product', credentialsId: 'ef5456f4-36c7-4d6c-a550-1c19048c0d9f', url: 'https://github.com/truong0806/phong_tro.git'
            }
        }
        stage('test') {
            steps {
                sh 'docker --version'
            }
        }
        
    }
}
