pipeline {

  agent any

  stages {

    stage('Install') {
      steps {
        sh '''cd ./WebApp
              dotnet restore'''
        sh '''cd ./WebApp/khaneliman
              npm install
              npm install -g @angular/cli'''
      }
    }

    stage('Test') {
      parallel {
        stage('Static code analysis') {
          steps {
            sh '''cd ./WebApp/khaneliman
                  npm run-script lint'''
          }
        }

        stage('Unit tests') {
          steps {
            sh '''cd ./WebApp/khaneliman
                  npm run-script test-coverage'''
          }
        }
      }
    }

    stage('Build') {
      steps {
        sh 'dotnet build ./WebApp/WebApp.csproj'
        sh '''cd ./WebApp/khaneliman/
              npm run-script build'''
      }
    }
  }

  post {
      always {
        publishHTML (target : [allowMissing: false,
              alwaysLinkToLastBuild: true,
              keepAll: true,
              reportDir: './WebApp/khaneliman/apps/austin-horstman/coverage/austin-horstman',
              reportFiles: 'index.html',
              reportName: 'Angular Code Coverage',
              reportTitles: 'The Report'])
        junit 'WebApp/khaneliman/apps/austin-horstman/coverage/junit/Chrome_Headless_93.0.4577.0_(Linux_x86_64)/junit.xml'
      }
      success {
        archiveArtifacts artifacts: 'WebApp/khaneliman/apps/austin-horstman/dist/**', fingerprint: true
      }
  }

  tools {
    dockerTool 'Docker'
    dotnetsdk 'dotnetsdk'
    git 'Default'
    nodejs 'nodejs'
  }

  environment {
    imageName = 'khaneliman/webapp'
    registryUri = 'registry.khaneliman.com'

  }

  options { 
    buildDiscarder(logRotator(numToKeepStr: '15', artifactNumToKeepStr: '15'))
  }
}