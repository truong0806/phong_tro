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
                script {
                    // Build and push Docker images from client folder
                    docker.withRegistry(thanhtruong869, "docker-hub") {
                        docker.build("thanhtruong869/api-phongtroclient:latest", "./client")
                        docker.image("thanhtruong869/api-phongtroclient:latest").push()
                    }

                    // Build and push Docker images from server folder
                    docker.withRegistry(thanhtruong869, "docker-hub") {
                        docker.build("thanhtruong869/api-phongtro-server:latest", "./server")
                        docker.image("thanhtruong869/api-phongtro-server:latest").push()
                    }
                }
            }
        }
        
    }
}
