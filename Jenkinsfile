pipeline {

  agent any

  stages {

    stage('Install') {
      steps {
        sh '''cd ./WebApp
              dotnet restore'''
        sh '''cd ./WebApp/ClientApp
              npm install
              npm install -g @angular/cli'''
      }
    }

    stage('Test') {
      parallel {
        stage('Static code analysis') {
          steps {
            sh '''cd ./WebApp/ClientApp
                  npm run-script lint'''
          }
        }

        stage('Unit tests') {
          steps {
            sh '''cd ./WebApp/ClientApp
                  npm run-script test-coverage'''
          }
        }
      }
    }

    stage('Build') {
      steps {
        sh 'dotnet build ./WebApp/WebApp.csproj'
        sh '''cd ./WebApp/ClientApp/
              npm run-script build'''
      }
    }

    stage('Deploy') {
      steps {
        sh 'docker build -t 192.168.1.37:5000/khaneliman/webapp:latest .'
        sh 'docker push 192.168.1.37:5000/khaneliman/webapp:latest '
      }
    }
  }

  post {
      always {
        archiveArtifacts artifacts: 'WebApp/ClientApp/dist/**', fingerprint: true
        publishHTML (target : [allowMissing: false,
              alwaysLinkToLastBuild: true,
              keepAll: true,
              reportDir: './WebApp/ClientApp/coverage/ClientApp',
              reportFiles: 'index.html',
              reportName: 'Angular Code Coverage',
              reportTitles: 'The Report'])
        junit 'WebApp/ClientApp/coverage/junit/Chrome_Headless_93.0.4577.0_(Linux_x86_64)/junit.xml'
      }
  }

  tools {
    dotnetsdk 'dotnetsdk'
    nodejs 'nodejs'
    dockerTool 'dockerTool'
  }

  environment {
    imageName = 'khaneliman/webapp'
    registryUri = '192.168.1.37:5000'

  }

  options { 
    buildDiscarder(logRotator(numToKeepStr: '15', artifactNumToKeepStr: '15'))
  }
}