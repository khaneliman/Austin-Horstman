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
npm run-script test'''
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

    stage('Artifacts') {
      steps {
        archiveArtifacts './WebApp/ClientApp/dist'
      }
    }

  }
  tools {
    dotnetsdk 'dotnetsdk'
    nodejs 'nodejs'
  }
}