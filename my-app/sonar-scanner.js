const scanner = require('sonarqube-scanner');

scanner(
  {
    serverUrl : 'http://192.168.18.165:9000',
    token : "sqp_3ad2e8b9d210e22bd1356db7bddf43b983bf30cb",
    options: {
      'sonar.projectName': 'lab6',
      'sonar.projectDescription': 'Assignment_6',
    
    }
  },
  () => process.exit()
)