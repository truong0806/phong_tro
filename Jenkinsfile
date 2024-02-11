pipeline {
    agent any
    stages {
        stage('Clone Project') {
            steps {
                git branch: 'product', credentialsId: 'ef5456f4-36c7-4d6c-a550-1c19048c0d9f', url: 'https://github.com/truong0806/phong_tro.git'
            }
        }
        stage('Build and Push Docker Images') {
            steps {
                withDockerRegistry(credentialsId: 'docker-hub', url: 'https://registry.hub.docker.com') {
                  sh "docker build ./client/ --file ./client/Dockerfile --tag thanhtruong869/client-phongtro-app:latest"
                  sh "docker push thanhtruong869/client-phongtro-app:latest" 
                  sh "docker build ./server/ --file ./server/Dockerfile --tag thanhtruong869/api-phongtro-app:latest"
                  sh "docker push thanhtruong869/api-phongtro-app:latest"
                }
            }
        }
        
    }
}
