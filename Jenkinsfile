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
      }
    }
  tools {
    dotnetsdk 'dotnetsdk'
    nodejs 'nodejs'
  }
}