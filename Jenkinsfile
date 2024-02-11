pipeline {
    agent any
    stages {
        stage('Clone Project') {
            steps {
                git branch: 'product', credentialsId: 'ef5456f4-36c7-4d6c-a550-1c19048c0d9f', url: 'https://github.com/truong0806/phong_tro.git'
            }
        }
        stage('Buil Docker Client') {
            steps {
                withDockerRegistry(credentialsId: 'f3a1d490-867a-4c8b-9b92-f4466607fa26', url: 'https://index.docker.io/v1/') {
                    sh 'pwd'
                }
            }
        }
        
    }
}
