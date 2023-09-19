pipeline {
  agent any
  stages {
    stage ('Build') {
      println('Building')
      steps {
        echo 'Building..'
      }
      sh: "cd client"
      println('cd client')
      sh: "npm i"
      println('install nodemodule')
      sh: "npm start"
    }

  }
}
