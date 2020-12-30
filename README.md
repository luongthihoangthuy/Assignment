Part 1: Test Design and Bug Challenge

1. Test Approach
Please refer to 'OpenWeather_TestStrategy' file.
Notes: I created a test strategy for all features in the application.

2. Design test cases
Please refer to 'Search' sheet in 'OpenWeather_Testcases' file

3. Find bug
Please refer to 'Bug' sheet in 'OpenWeather_Testcases' file

4. API testing (optional)
Some GET requests are prepared. 
Please import 'OpenWeatherAPI.postman_collection' into Postman tool for reference.

Part 2: UI Automation

Preconditions: Project Setup and Cypress Installation

1. Download and install NodeJS
https://nodejs.org/en/download
2. Set NODE_HOME Environment Variable
Variable name: NODE_HOME
Variable value: C:\Program Files\nodejs

3. Install Cypress
npm install cypress --save-dev

4. Download and install Visual Studio Code Editor
https://code.visualstudio.com/download

5. Open Visual Studio Code. Go to File > Open Folder > select the project folder (ex: OpenWeather)

6. Open a new terminal to run Cypress from the command line.
Ex: npx cypress open

7. Click on a file to run
Ex: homepage.spec.js

Notes: 
- I intended to use the Mochawesome HTML Report in this assignment, however, it did not work.
- I attached screenshots of UI Autiomation and API testing to make sure the test scripts and API testing run successfully.
Please refer to 'UI Automation -Test Result' file.