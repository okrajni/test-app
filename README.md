# test-app
Automatiomiot test - Protractor

Setup
-----

    git clone https://github.com/okrajni/test-app.git
    cd test-app
    npm install
    npm install protractor
    npm install protractor-beautiful-reporter --save-dev
    webdriver-manager update
    webdriver-manager start

In new terminal tab run:

    protractor conf.js
   
The report will be generated automatically tmp/screenshots/report.html
