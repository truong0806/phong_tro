pipeline {
    agent any
    stages {
        stage('Clone Project') {
            steps {
                git branch: 'product', credentialsId: 'ef5456f4-36c7-4d6c-a550-1c19048c0d9f', url: 'https://github.com/truong0806/phong_tro.git'
            }
        }
        stage('Build Docker Client') {
            steps {
                withDockerRegistry(credentialsId: 'f3a1d490-867a-4c8b-9b92-f4466607fa26', url: 'https://index.docker.io/v1/') {
                    sh 'docker build ./client/ --file ./client/Dockerfile --tag thanhtruong869/client-phongtro-app:latest'
                    sh 'docker push thanhtruong869/client-phongtro-app:latest'
                  }
            }
        }
        stage('Build Docker API') {
            steps {
                withDockerRegistry(credentialsId: 'f3a1d490-867a-4c8b-9b92-f4466607fa26', url: 'https://index.docker.io/v1/') {
                    sh 'docker build ./server/ --file ./server/Dockerfile --tag thanhtruong869/api-phongtro-app:latest'
                    sh 'docker push thanhtruong869/api-phongtro-app:latest'
                  }
            }
        }
        
    }
}
