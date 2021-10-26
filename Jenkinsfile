pipeline {
  agent {
    docker {
      image 'node:latest'
    }

  }
  stages {
    stage('Install') {
      steps {
        sh 'dotnet build austinhorstman.csproj'
        sh '''cd ClientApp
npm install
npm install -g @angular/cli
ng build'''
      }
    }

    stage('Test') {
      parallel {
        stage('Static code analysis') {
          steps {
            sh 'npm run-script lint'
          }
        }

        stage('Unit tests') {
          steps {
            sh 'npm run-script test'
          }
        }

      }
    }

    stage('Build') {
      steps {
        sh 'npm run-script build'
      }
    }

  }
}