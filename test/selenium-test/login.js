const assert = require("assert");
const test = require("selenium-webdriver/testing");
const webdriver = require("selenium-webdriver");
const By = require("selenium-webdriver").By;

let browser;



// function nameAndAction(name, action = 'click', text = '') {
//     browser.findElement(By.name(name)).then(function (element) {
//         if (action === 'fill') {
//             element.clear();
//             element.sendKeys(text);
//         } else {
//             element.click();
//         }
//     });
// }
// Test Suite
test.describe("Check index page", function () {

    test.beforeEach(function (done) {
        this.timeout(20000);
        browser = new webdriver.Builder().
            withCapabilities(webdriver.Capabilities.firefox()).build();

        browser.get("http://localhost:3000");
        done();
    });

    test.afterEach(function (done) {
        browser.quit();
        done();
    });

    // Test case
    test.it("Check elements on index", function (done) {
        // Check correct title
        // browser.getTitle().then(function (title) {
        //     assert.equal(title, "Multipage");
        // });

        // Check correct heading
        browser.findElement(By.css("h1")).then(function (element) {
            element.getText().then(function (text) {
                assert.equal(text, "Investment");
            });
        });

        // Check correct URL ending
        browser.getCurrentUrl().then(function (url) {
            assert.ok(url.endsWith(""));
        });

        done();
    });



    test.it("Login", function (done) {
        browser.get("http://localhost:3000/login");
       
        browser.findElement(By.css("h2")).then(function (element) {
            element.getText().then(function (text) {
                assert.equal(text, "LOGIN");
            });
        });


        // Check correct URL ending
        browser.getCurrentUrl().then(function (url) {
            assert.ok(url.endsWith("/login"));
        });

        done();
    });



    // test.it("Login title", function (done) {
    //     browser.get("http://localhost:3000/login");
        
    //     // login title name
    //     browser.findElement(By.css("h2")).then(function (element) {
    //         element.getText().then(function (text) {
    //             assert.equal(text, "LOGIN");
    //         });
    //     });


    //     done();
    // });


    test.it("Login input", function (done) {
        browser.get("http://localhost:3000/login");

        // input login
        browser.findElement(By.css("input")).then(function (element) {
            element.getText().then(function (text) {
                assert.equal(text, "");
            });
        });

        // input password
        browser.findElement(By.id("password")).then(function (element) {
            element.getText().then(function (text) {
                assert.equal(text, "");
            });
        });

        


        done();
    });



    test.it("Login test", function (done) {
        browser.get("http://localhost:3000/login");

        // login title name
        browser.findElement(By.id("password")).then(function (element) {
            element.getText().then(function (text) {
                assert.equal(text, "");
            });
        });

        browser.findElement(By.name("login")).then(function (element) {
            element.sendKeys("asd");
            
        });

        browser.findElement(By.name("password")).then(function (element) {
            element.sendKeys("asd123");

        });

        browser.findElement(By.id("loginbutton")).then(function (element) {
            element.click();

        });


        browser.getTitle().then(function (title) {
            assert.equal(title, "Click or press Escape to dismiss.");
        });
       

        done();
    });


    test.it("navigate to home by navbar", function (done) {
        browser.get("http://localhost:3000/login");

        // login title name
        browser.findElement(By.id("home")).then(function (element) {
            element.click();

        });

        browser.getCurrentUrl().then(function (url) {
            assert.ok(url.endsWith(""));
        });
        


        done();
    });

    test.it("navigate to login by navbar", function (done) {
        browser.get("http://localhost:3000/login");

        // login title name
        browser.findElement(By.id("navlogin")).then(function (element) {
            element.click();

        });

        browser.getCurrentUrl().then(function (url) {
            assert.ok(url.endsWith("/Login"));
        });



        done();
    });


    test.it("navigate to register by navbar", function (done) {
        browser.get("http://localhost:3000/login");

        // login title name
        browser.findElement(By.id("register")).then(function (element) {
            element.click();

        });

        browser.getCurrentUrl().then(function (url) {
            assert.ok(url.endsWith("/Register"));
        });



        done();
    });


    
});