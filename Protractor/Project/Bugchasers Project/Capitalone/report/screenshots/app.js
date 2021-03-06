var app = angular.module('reportingApp', []);

app.controller('ScreenshotReportController', function ($scope) {
    $scope.searchSettings = Object.assign({
        description: '',
        allselected: true,
        passed: true,
        failed: true,
        pending: true,
        withLog: true
    }, {}); // enable customisation of search settings on first page hit

    var initialColumnSettings = undefined; // enable customisation of visible columns on first page hit
    if (initialColumnSettings) {
        if (initialColumnSettings.displayTime !== undefined) {
            // initial settings have be inverted because the html bindings are inverted (e.g. !ctrl.displayTime)
            this.displayTime = !initialColumnSettings.displayTime;
        }
        if (initialColumnSettings.displayBrowser !== undefined) {
            this.displayBrowser = !initialColumnSettings.displayBrowser; // same as above
        }
        if (initialColumnSettings.displaySessionId !== undefined) {
            this.displaySessionId = !initialColumnSettings.displaySessionId; // same as above
        }
        if (initialColumnSettings.displayOS !== undefined) {
            this.displayOS = !initialColumnSettings.displayOS; // same as above
        }
        if (initialColumnSettings.inlineScreenshots !== undefined) {
            this.inlineScreenshots = initialColumnSettings.inlineScreenshots; // this setting does not have to be inverted
        }

    }


    $scope.inlineScreenshots = false;
    this.showSmartStackTraceHighlight = true;

    this.chooseAllTypes = function () {
        var value = true;
        $scope.searchSettings.allselected = !$scope.searchSettings.allselected;
        if (!$scope.searchSettings.allselected) {
            value = false;
        }

        $scope.searchSettings.passed = value;
        $scope.searchSettings.failed = value;
        $scope.searchSettings.pending = value;
        $scope.searchSettings.withLog = value;
    };

    this.isValueAnArray = function (val) {
        return isValueAnArray(val);
    };

    this.getParent = function (str) {
        var arr = str.split('|');
        str = "";
        for (var i = arr.length - 2; i > 0; i--) {
            str += arr[i] + " > ";
        }
        return str.slice(0, -3);
    };

    this.getSpec = function (str) {
        return getSpec(str);
    };


    this.getShortDescription = function (str) {
        return str.split('|')[0];
    };

    this.convertTimestamp = function (timestamp) {
        var d = new Date(timestamp),
            yyyy = d.getFullYear(),
            mm = ('0' + (d.getMonth() + 1)).slice(-2),
            dd = ('0' + d.getDate()).slice(-2),
            hh = d.getHours(),
            h = hh,
            min = ('0' + d.getMinutes()).slice(-2),
            ampm = 'AM',
            time;

        if (hh > 12) {
            h = hh - 12;
            ampm = 'PM';
        } else if (hh === 12) {
            h = 12;
            ampm = 'PM';
        } else if (hh === 0) {
            h = 12;
        }

        // ie: 2013-02-18, 8:35 AM
        time = yyyy + '-' + mm + '-' + dd + ', ' + h + ':' + min + ' ' + ampm;

        return time;
    };


    this.round = function (number, roundVal) {
        return (parseFloat(number) / 1000).toFixed(roundVal);
    };


    this.passCount = function () {
        var passCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (result.passed) {
                passCount++;
            }
        }
        return passCount;
    };


    this.pendingCount = function () {
        var pendingCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (result.pending) {
                pendingCount++;
            }
        }
        return pendingCount;
    };


    this.failCount = function () {
        var failCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (!result.passed && !result.pending) {
                failCount++;
            }
        }
        return failCount;
    };

    this.passPerc = function () {
        return (this.passCount() / this.totalCount()) * 100;
    };
    this.pendingPerc = function () {
        return (this.pendingCount() / this.totalCount()) * 100;
    };
    this.failPerc = function () {
        return (this.failCount() / this.totalCount()) * 100;
    };
    this.totalCount = function () {
        return this.passCount() + this.failCount() + this.pendingCount();
    };

    this.applySmartHighlight = function (line) {
        if (this.showSmartStackTraceHighlight) {
            if (line.indexOf('node_modules') > -1) {
                return 'greyout';
            }
            if (line.indexOf('  at ') === -1) {
                return '';
            }

            return 'highlight';
        }
        return true;
    };


    var results = [
    {
        "description": "should test footer logo and social media icons are displayed|Testing CapitalOne.com main page footer functionalities|Testing Capitalone Bank page",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 7651,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images/00340011-0072-0070-0020-0055005a00ee.png",
        "timestamp": 1540360420219,
        "duration": 144
    },
    {
        "description": "should check footer section product names|Testing CapitalOne.com main page footer functionalities|Testing Capitalone Bank page",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 7651,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images/00b000f5-003f-003a-0070-00dd00b300c3.png",
        "timestamp": 1540360420659,
        "duration": 97
    },
    {
        "description": "should chek instagram icon works properly|Testing CapitalOne.com main page footer functionalities|Testing Capitalone Bank page",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 7651,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images/005600fa-00e0-0050-002e-00590089008e.png",
        "timestamp": 1540360421041,
        "duration": 2262
    },
    {
        "description": "should chek twitter icon works properly|Testing CapitalOne.com main page footer functionalities|Testing Capitalone Bank page",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 7651,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images/00110083-00a0-005a-0064-001000520048.png",
        "timestamp": 1540360423584,
        "duration": 2350
    },
    {
        "description": "should chek facebook icon works properly|Testing CapitalOne.com main page footer functionalities|Testing Capitalone Bank page",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 7651,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images/00fa003c-0060-0068-0067-00710027005b.png",
        "timestamp": 1540360426227,
        "duration": 2615
    },
    {
        "description": "should chek linkedIn icon works properly|Testing CapitalOne.com main page footer functionalities|Testing Capitalone Bank page",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 7651,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images/0012009a-004c-003d-00da-00470074001d.png",
        "timestamp": 1540360429129,
        "duration": 2192
    },
    {
        "description": "should chek youTube icon works properly|Testing CapitalOne.com main page footer functionalities|Testing Capitalone Bank page",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 7651,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "deprecation - HTML Imports is deprecated and will be removed in M73, around March 2019. Please use ES modules instead. See https://www.chromestatus.com/features/5144752345317376 for more details.",
                "timestamp": 1540360433929,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://www.youtube.com/yts/jsbin/desktop_polymer-vflSYTh1k/desktop_polymer.js 22 document.registerElement is deprecated and will be removed in M73, around March 2019. Please use window.customElements.define instead. See https://www.chromestatus.com/features/4642138092470272 for more details.",
                "timestamp": 1540360433929,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://www.youtube.com/user/CapitalOne - Refused to display 'https://accounts.google.com/ServiceLogin?continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Fnext%3D%252Fsignin_passive%26feature%3Dpassive%26action_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Den&passive=true&hl=en&uilel=3&service=youtube' in a frame because it set 'X-Frame-Options' to 'deny'.",
                "timestamp": 1540360433930,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "chrome-extension://invalid/ - Failed to load resource: net::ERR_BLOCKED_BY_CLIENT",
                "timestamp": 1540360433935,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "chrome-extension://invalid/ - Failed to load resource: net::ERR_BLOCKED_BY_CLIENT",
                "timestamp": 1540360434278,
                "type": ""
            }
        ],
        "screenShotFile": "images/00f900f1-0012-0003-00b6-0005002400c6.png",
        "timestamp": 1540360431592,
        "duration": 2867
    },
    {
        "description": "should check Feedback icon is works properly|Testing CapitalOne.com main page footer functionalities|Testing Capitalone Bank page",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 7651,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "images/00240062-0021-0061-0003-008c00de00e0.png",
        "timestamp": 1540360434747,
        "duration": 6359
    },
    {
        "description": "should test the Privacy Policy,Security and Terms&Conditions are available for users|Testing CapitalOne.com main page footer functionalities|Testing Capitalone Bank page",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 7651,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images/005d0034-00dc-00d3-00b2-00cf00e500da.png",
        "timestamp": 1540360441395,
        "duration": 69
    },
    {
        "description": "should test Call Us and gets phone number|Testing CapitalOne.com main page footer functionalities|Testing Capitalone Bank page",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 7651,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://assets.ctfassets.net/t6fd2nx1cmwp/7lKLuiGVjO8AiaCK2gAeiS/33d558325c2a0fb2fe4c98d037eb2b40/mbox.min.js 1 A parser-blocking, cross site (i.e. different eTLD+1) script, https://cdn.tt.omtrdc.net/cdn/target.js, is invoked via document.write. The network request for this script MAY be blocked by the browser in this or a future page load due to poor network connectivity. If blocked in this page load, it will be confirmed in a subsequent console message. See https://www.chromestatus.com/feature/5718547946799104 for more details.",
                "timestamp": 1540360442909,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://assets.ctfassets.net/t6fd2nx1cmwp/7lKLuiGVjO8AiaCK2gAeiS/33d558325c2a0fb2fe4c98d037eb2b40/mbox.min.js 1 A parser-blocking, cross site (i.e. different eTLD+1) script, https://cdn.tt.omtrdc.net/cdn/target.js, is invoked via document.write. The network request for this script MAY be blocked by the browser in this or a future page load due to poor network connectivity. If blocked in this page load, it will be confirmed in a subsequent console message. See https://www.chromestatus.com/feature/5718547946799104 for more details.",
                "timestamp": 1540360442909,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://assets.ctfassets.net/t6fd2nx1cmwp/7lKLuiGVjO8AiaCK2gAeiS/33d558325c2a0fb2fe4c98d037eb2b40/mbox.min.js 1 A parser-blocking, cross site (i.e. different eTLD+1) script, https://capitaloneservices.tt.omtrdc.net/m2/capitaloneservices/mbox/ajax?mboxHost=www.capitalone.com&mboxPage=1540360442907-108269&screenHeight=1080&screenWidth=1920&browserWidth=1200&browserHeight=877&browserTimeOffset=-300&colorDepth=24&mboxSession=2f1a92dfd046423da823ecc0af0b04e7&mboxPC=2f1a92dfd046423da823ecc0af0b04e7.28_41&mboxXDomain=enabled&mboxCount=1&mboxTime=1540342442910&mbox=target-global-mbox&mboxId=0&mboxURL=https%3A%2F%2Fwww.capitalone.com%2Fcontact%2F&mboxReferrer=https%3A%2F%2Fwww.capitalone.com%2F&mboxVersion=58, is invoked via document.write. The network request for this script MAY be blocked by the browser in this or a future page load due to poor network connectivity. If blocked in this page load, it will be confirmed in a subsequent console message. See https://www.chromestatus.com/feature/5718547946799104 for more details.",
                "timestamp": 1540360442912,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://assets.ctfassets.net/t6fd2nx1cmwp/TSLprUP9AqsWqioAokCoi/ffe7dba9c7e0a418a8e226e865d1f862/cof.min.js 0:63826 Uncaught TypeError: $(...).hoverIntent is not a function",
                "timestamp": 1540360443298,
                "type": ""
            }
        ],
        "screenShotFile": "images/00550047-000e-00d2-005f-007c003d00ab.png",
        "timestamp": 1540360441722,
        "duration": 2008
    },
    {
        "description": "should have CapitalOne logo in the home page|Home Page|Capitalone",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 7651,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images/004b00ff-00c3-0032-0082-007a004e0030.png",
        "timestamp": 1540360444045,
        "duration": 2016
    },
    {
        "description": "should have the primary navigation titles|Home Page|Capitalone",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 7651,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images/00fb00c4-0041-0016-0009-0021003c0036.png",
        "timestamp": 1540360446336,
        "duration": 1794
    },
    {
        "description": "should have search box when search is clicked|Home Page|Capitalone",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 7651,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images/009b007d-00f9-00b3-00fd-002d00e000b6.png",
        "timestamp": 1540360448399,
        "duration": 3842
    },
    {
        "description": "should search a place in location feature|Home Page|Capitalone",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 7651,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://maps.googleapis.com/maps-api-v3/api/js/33/10a/util.js 223:47 \"Google Maps JavaScript API warning: RetiredVersion https://developers.google.com/maps/documentation/javascript/error-messages#retired-version\"",
                "timestamp": 1540360461081,
                "type": ""
            }
        ],
        "screenShotFile": "images/00220081-0083-00b2-005c-005400c500ee.png",
        "timestamp": 1540360452665,
        "duration": 9438
    },
    {
        "description": "should display Venture Card logo and heading when hovering on Credit Cards|Home Page|Capitalone",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 7651,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images/00410045-0063-004e-00b2-00f600630082.png",
        "timestamp": 1540360462536,
        "duration": 1925
    },
    {
        "description": "should search the given value and show the result|Home Page|Capitalone",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 7651,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images/00e40004-00a8-003d-003b-001c004c0090.png",
        "timestamp": 1540360464803,
        "duration": 3815
    },
    {
        "description": "should navigate to support page when Support is clicked|Home Page|Capitalone",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 7651,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images/006d00c6-009d-0080-0057-0075007000d6.png",
        "timestamp": 1540360468900,
        "duration": 3277
    },
    {
        "description": "should check iframe feedback window|Home Page|Capitalone",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 7651,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images/00660092-00ac-00e2-0031-00bf00100025.png",
        "timestamp": 1540360472811,
        "duration": 4093
    },
    {
        "description": "should show the error when clicked sign in without username data|Sign in feature|Capitalone",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 7651,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images/006500d3-0033-0086-000e-00e100400064.png",
        "timestamp": 1540360477245,
        "duration": 1865
    },
    {
        "description": "should have blue border line when clicked, \"red\" when no data entered and sign in clicked|Sign in feature|Capitalone",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 7651,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images/00f90012-00e5-00e0-0085-0092006b00f6.png",
        "timestamp": 1540360479523,
        "duration": 1876
    },
    {
        "description": "should show the error when clicked sign in without password data|Sign in feature|Capitalone",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 7651,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images/008a00a0-00a8-00a5-004c-00fd004500e5.png",
        "timestamp": 1540360481680,
        "duration": 1952
    },
    {
        "description": "should show error message after entering wrong username and password|Sign in feature|Capitalone",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 7651,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "SEVERE",
                "message": "https://verified.capitalone.com/signincontroller-web/signincontroller/signin - Failed to load resource: the server responded with a status of 409 (Conflict)",
                "timestamp": 1540360487981,
                "type": ""
            }
        ],
        "screenShotFile": "images/00eb007c-007a-0031-001e-00bb0041008c.png",
        "timestamp": 1540360484145,
        "duration": 3843
    },
    {
        "description": "should be able to click \"Remember me\" button|Sign in feature|Capitalone",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 7651,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "images/006c0038-00f3-0054-001f-00820008000a.png",
        "timestamp": 1540360488235,
        "duration": 3013
    },
    {
        "description": "should navigate to the Sign In Help page|Sign in feature|Capitalone",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 7651,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images/003900f0-006a-0098-001d-005300aa0092.png",
        "timestamp": 1540360491650,
        "duration": 4013
    },
    {
        "description": "Should not enable the find me button if any field left empty|Sign in feature|Capitalone",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 7651,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images/002a0015-00f9-00cc-0024-006700fd0093.png",
        "timestamp": 1540360496160,
        "duration": 3983
    },
    {
        "description": "should search to find the user in sign in help page|Sign in feature|Capitalone",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 7651,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://ds-aksb-a.akamaihd.net/aksb.min.js 21 chrome.loadTimes() is deprecated, instead use standardized API: Paint Timing. https://www.chromestatus.com/features/5637885046816768.",
                "timestamp": 1540360504531,
                "type": ""
            }
        ],
        "screenShotFile": "images/00850016-00f6-0056-00c7-00770025009b.png",
        "timestamp": 1540360500493,
        "duration": 5832
    },
    {
        "description": "should navigate to Savor Card page when Savor Card heading is clicked|A new credit card|Capitalone",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 7651,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "SEVERE",
                "message": "https://www.capitalone.com/assets/credit-cards/js/cof-fb491a6d55.js 1:13661 \"%cERROR: At least one review required\" \"font-size: large\"",
                "timestamp": 1540360510151,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://www.capitalone.com/assets/credit-cards/js/cof-fb491a6d55.js 1:13661 \"%cERROR: At least one review required\" \"font-size: large\"",
                "timestamp": 1540360510151,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://www.capitalone.com/assets/credit-cards/js/cof-fb491a6d55.js 1:13661 \"%cERROR: At least one review required\" \"font-size: large\"",
                "timestamp": 1540360510320,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://www.capitalone.com/assets/credit-cards/js/cof-fb491a6d55.js 1:13661 \"%cERROR: At least one review required\" \"font-size: large\"",
                "timestamp": 1540360510321,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://www.capitalone.com/assets/credit-cards/js/cof-fb491a6d55.js 1:13661 \"%cERROR: At least one review required\" \"font-size: large\"",
                "timestamp": 1540360510402,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://www.capitalone.com/assets/credit-cards/js/cof-fb491a6d55.js 1:11153 \"dataError: {\\n\\t\\\"Limit\\\": 2,\\n\\t\\\"Offset\\\": 0,\\n\\t\\\"TotalResults\\\": 0,\\n\\t\\\"Locale\\\": \\\"en_US\\\",\\n\\t\\\"Results\\\": [],\\n\\t\\\"Includes\\\": {},\\n\\t\\\"HasErrors\\\": false,\\n\\t\\\"Errors\\\": []\\n}\"",
                "timestamp": 1540360510402,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://www.capitalone.com/assets/credit-cards/js/cof-fb491a6d55.js 1:13661 \"%cERROR: At least one review required\" \"font-size: large\"",
                "timestamp": 1540360510759,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://www.capitalone.com/assets/credit-cards/js/cof-fb491a6d55.js 1:11153 \"dataError: {\\n\\t\\\"Limit\\\": 2,\\n\\t\\\"Offset\\\": 0,\\n\\t\\\"TotalResults\\\": 0,\\n\\t\\\"Locale\\\": \\\"en_US\\\",\\n\\t\\\"Results\\\": [],\\n\\t\\\"Includes\\\": {},\\n\\t\\\"HasErrors\\\": false,\\n\\t\\\"Errors\\\": []\\n}\"",
                "timestamp": 1540360510759,
                "type": ""
            }
        ],
        "screenShotFile": "images/00170092-0083-0087-00fc-006400780089.png",
        "timestamp": 1540360506603,
        "duration": 4397
    },
    {
        "description": "should navigate to Savor Card apply page when \"Apply Now\" button is clicked|A new credit card|Capitalone",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 7651,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "SEVERE",
                "message": "https://www.capitalone.com/assets/credit-cards/js/cof-fb491a6d55.js 1:13661 \"%cERROR: At least one review required\" \"font-size: large\"",
                "timestamp": 1540360514662,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://www.capitalone.com/assets/credit-cards/js/cof-fb491a6d55.js 1:13661 \"%cERROR: At least one review required\" \"font-size: large\"",
                "timestamp": 1540360514663,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://www.capitalone.com/assets/credit-cards/js/cof-fb491a6d55.js 1:13661 \"%cERROR: At least one review required\" \"font-size: large\"",
                "timestamp": 1540360514864,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://www.capitalone.com/assets/credit-cards/js/cof-fb491a6d55.js 1:11153 \"dataError: {\\n\\t\\\"Limit\\\": 2,\\n\\t\\\"Offset\\\": 0,\\n\\t\\\"TotalResults\\\": 0,\\n\\t\\\"Locale\\\": \\\"en_US\\\",\\n\\t\\\"Results\\\": [],\\n\\t\\\"Includes\\\": {},\\n\\t\\\"HasErrors\\\": false,\\n\\t\\\"Errors\\\": []\\n}\"",
                "timestamp": 1540360514864,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://www.capitalone.com/assets/credit-cards/js/cof-fb491a6d55.js 1:13661 \"%cERROR: At least one review required\" \"font-size: large\"",
                "timestamp": 1540360514889,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://www.capitalone.com/assets/credit-cards/js/cof-fb491a6d55.js 1:13661 \"%cERROR: At least one review required\" \"font-size: large\"",
                "timestamp": 1540360514890,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://www.capitalone.com/assets/credit-cards/js/cof-fb491a6d55.js 1:13661 \"%cERROR: At least one review required\" \"font-size: large\"",
                "timestamp": 1540360515098,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://www.capitalone.com/assets/credit-cards/js/cof-fb491a6d55.js 1:11153 \"dataError: {\\n\\t\\\"Limit\\\": 2,\\n\\t\\\"Offset\\\": 0,\\n\\t\\\"TotalResults\\\": 0,\\n\\t\\\"Locale\\\": \\\"en_US\\\",\\n\\t\\\"Results\\\": [],\\n\\t\\\"Includes\\\": {},\\n\\t\\\"HasErrors\\\": false,\\n\\t\\\"Errors\\\": []\\n}\"",
                "timestamp": 1540360515098,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://applynow.capitalone.com/js/bundle.ea4a71c15aef6892b0c1.js 0 chrome.loadTimes() is deprecated, instead use standardized API: Paint Timing. https://www.chromestatus.com/features/5637885046816768.",
                "timestamp": 1540360519468,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://applynow.capitalone.com/js/bundle.ea4a71c15aef6892b0c1.js 0 chrome.loadTimes() is deprecated, instead use standardized API: Navigation Timing 2. https://www.chromestatus.com/features/5637885046816768.",
                "timestamp": 1540360519468,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://applynow.capitalone.com/js/bundle.ea4a71c15aef6892b0c1.js 0 chrome.loadTimes() is deprecated, instead use standardized API: Navigation Timing 2. https://www.chromestatus.com/features/5637885046816768.",
                "timestamp": 1540360519469,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://applynow.capitalone.com/js/bundle.ea4a71c15aef6892b0c1.js 0 chrome.loadTimes() is deprecated, instead use standardized API: Navigation Timing 2. https://www.chromestatus.com/features/5637885046816768.",
                "timestamp": 1540360519469,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://applynow.capitalone.com/js/bundle.ea4a71c15aef6892b0c1.js 0 chrome.loadTimes() is deprecated, instead use standardized API: Navigation Timing 2. https://www.chromestatus.com/features/5637885046816768.",
                "timestamp": 1540360519469,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://applynow.capitalone.com/js/bundle.ea4a71c15aef6892b0c1.js 0 chrome.loadTimes() is deprecated, instead use standardized API: Navigation Timing 2. https://www.chromestatus.com/features/5637885046816768.",
                "timestamp": 1540360519470,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://applynow.capitalone.com/js/bundle.ea4a71c15aef6892b0c1.js 0 chrome.loadTimes() is deprecated, instead use standardized API: Paint Timing. https://www.chromestatus.com/features/5637885046816768.",
                "timestamp": 1540360519470,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://applynow.capitalone.com/js/bundle.ea4a71c15aef6892b0c1.js 0 chrome.loadTimes() is deprecated, instead use standardized API: Navigation Timing 2. https://www.chromestatus.com/features/5637885046816768.",
                "timestamp": 1540360519471,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://applynow.capitalone.com/js/bundle.ea4a71c15aef6892b0c1.js 0 chrome.loadTimes() is deprecated, instead use standardized API: nextHopProtocol in Navigation Timing 2. https://www.chromestatus.com/features/5637885046816768.",
                "timestamp": 1540360519471,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://applynow.capitalone.com/js/bundle.ea4a71c15aef6892b0c1.js 0 chrome.loadTimes() is deprecated, instead use standardized API: nextHopProtocol in Navigation Timing 2. https://www.chromestatus.com/features/5637885046816768.",
                "timestamp": 1540360519471,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://applynow.capitalone.com/js/bundle.ea4a71c15aef6892b0c1.js 0 chrome.loadTimes() is deprecated, instead use standardized API: nextHopProtocol in Navigation Timing 2. https://www.chromestatus.com/features/5637885046816768.",
                "timestamp": 1540360519472,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://applynow.capitalone.com/js/bundle.ea4a71c15aef6892b0c1.js 0 chrome.loadTimes() is deprecated, instead use standardized API: nextHopProtocol in Navigation Timing 2. https://www.chromestatus.com/features/5637885046816768.",
                "timestamp": 1540360519472,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://applynow.capitalone.com/js/bundle.ea4a71c15aef6892b0c1.js 0 chrome.loadTimes() is deprecated, instead use standardized API: Navigation Timing 2. https://www.chromestatus.com/features/5637885046816768.",
                "timestamp": 1540360519473,
                "type": ""
            }
        ],
        "screenShotFile": "images/008b0082-0052-0033-008a-008b002e005b.png",
        "timestamp": 1540360511447,
        "duration": 9344
    },
    {
        "description": "Should bring up the submitting window after Filling the application form|A new credit card|Capitalone",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 7651,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "SEVERE",
                "message": "https://www.capitalone.com/assets/credit-cards/js/cof-fb491a6d55.js 1:13661 \"%cERROR: At least one review required\" \"font-size: large\"",
                "timestamp": 1540360524717,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://www.capitalone.com/assets/credit-cards/js/cof-fb491a6d55.js 1:13661 \"%cERROR: At least one review required\" \"font-size: large\"",
                "timestamp": 1540360524717,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://www.capitalone.com/assets/credit-cards/js/cof-fb491a6d55.js 1:13661 \"%cERROR: At least one review required\" \"font-size: large\"",
                "timestamp": 1540360524980,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://www.capitalone.com/assets/credit-cards/js/cof-fb491a6d55.js 1:11153 \"dataError: {\\n\\t\\\"Limit\\\": 2,\\n\\t\\\"Offset\\\": 0,\\n\\t\\\"TotalResults\\\": 0,\\n\\t\\\"Locale\\\": \\\"en_US\\\",\\n\\t\\\"Results\\\": [],\\n\\t\\\"Includes\\\": {},\\n\\t\\\"HasErrors\\\": false,\\n\\t\\\"Errors\\\": []\\n}\"",
                "timestamp": 1540360524980,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://www.capitalone.com/assets/credit-cards/js/cof-fb491a6d55.js 1:13661 \"%cERROR: At least one review required\" \"font-size: large\"",
                "timestamp": 1540360525045,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://www.capitalone.com/assets/credit-cards/js/cof-fb491a6d55.js 1:13661 \"%cERROR: At least one review required\" \"font-size: large\"",
                "timestamp": 1540360525045,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://www.capitalone.com/assets/credit-cards/js/cof-fb491a6d55.js 1:13661 \"%cERROR: At least one review required\" \"font-size: large\"",
                "timestamp": 1540360525270,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://www.capitalone.com/assets/credit-cards/js/cof-fb491a6d55.js 1:11153 \"dataError: {\\n\\t\\\"Limit\\\": 2,\\n\\t\\\"Offset\\\": 0,\\n\\t\\\"TotalResults\\\": 0,\\n\\t\\\"Locale\\\": \\\"en_US\\\",\\n\\t\\\"Results\\\": [],\\n\\t\\\"Includes\\\": {},\\n\\t\\\"HasErrors\\\": false,\\n\\t\\\"Errors\\\": []\\n}\"",
                "timestamp": 1540360525270,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://applynow.capitalone.com/js/bundle.ea4a71c15aef6892b0c1.js 0 chrome.loadTimes() is deprecated, instead use standardized API: Paint Timing. https://www.chromestatus.com/features/5637885046816768.",
                "timestamp": 1540360526698,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://applynow.capitalone.com/js/bundle.ea4a71c15aef6892b0c1.js 0 chrome.loadTimes() is deprecated, instead use standardized API: Navigation Timing 2. https://www.chromestatus.com/features/5637885046816768.",
                "timestamp": 1540360526698,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://applynow.capitalone.com/js/bundle.ea4a71c15aef6892b0c1.js 0 chrome.loadTimes() is deprecated, instead use standardized API: Navigation Timing 2. https://www.chromestatus.com/features/5637885046816768.",
                "timestamp": 1540360526699,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://applynow.capitalone.com/js/bundle.ea4a71c15aef6892b0c1.js 0 chrome.loadTimes() is deprecated, instead use standardized API: Navigation Timing 2. https://www.chromestatus.com/features/5637885046816768.",
                "timestamp": 1540360526699,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://applynow.capitalone.com/js/bundle.ea4a71c15aef6892b0c1.js 0 chrome.loadTimes() is deprecated, instead use standardized API: Navigation Timing 2. https://www.chromestatus.com/features/5637885046816768.",
                "timestamp": 1540360526700,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://applynow.capitalone.com/js/bundle.ea4a71c15aef6892b0c1.js 0 chrome.loadTimes() is deprecated, instead use standardized API: Navigation Timing 2. https://www.chromestatus.com/features/5637885046816768.",
                "timestamp": 1540360526700,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://applynow.capitalone.com/js/bundle.ea4a71c15aef6892b0c1.js 0 chrome.loadTimes() is deprecated, instead use standardized API: Paint Timing. https://www.chromestatus.com/features/5637885046816768.",
                "timestamp": 1540360526700,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://applynow.capitalone.com/js/bundle.ea4a71c15aef6892b0c1.js 0 chrome.loadTimes() is deprecated, instead use standardized API: Navigation Timing 2. https://www.chromestatus.com/features/5637885046816768.",
                "timestamp": 1540360526701,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://applynow.capitalone.com/js/bundle.ea4a71c15aef6892b0c1.js 0 chrome.loadTimes() is deprecated, instead use standardized API: nextHopProtocol in Navigation Timing 2. https://www.chromestatus.com/features/5637885046816768.",
                "timestamp": 1540360526701,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://applynow.capitalone.com/js/bundle.ea4a71c15aef6892b0c1.js 0 chrome.loadTimes() is deprecated, instead use standardized API: nextHopProtocol in Navigation Timing 2. https://www.chromestatus.com/features/5637885046816768.",
                "timestamp": 1540360526702,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://applynow.capitalone.com/js/bundle.ea4a71c15aef6892b0c1.js 0 chrome.loadTimes() is deprecated, instead use standardized API: nextHopProtocol in Navigation Timing 2. https://www.chromestatus.com/features/5637885046816768.",
                "timestamp": 1540360526702,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://applynow.capitalone.com/js/bundle.ea4a71c15aef6892b0c1.js 0 chrome.loadTimes() is deprecated, instead use standardized API: nextHopProtocol in Navigation Timing 2. https://www.chromestatus.com/features/5637885046816768.",
                "timestamp": 1540360526703,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://applynow.capitalone.com/js/bundle.ea4a71c15aef6892b0c1.js 0 chrome.loadTimes() is deprecated, instead use standardized API: Navigation Timing 2. https://www.chromestatus.com/features/5637885046816768.",
                "timestamp": 1540360526703,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://maps.googleapis.com/maps-api-v3/api/js/33/10a/util.js 223:47 \"Google Maps JavaScript API warning: SignedInNotSupported https://developers.google.com/maps/documentation/javascript/error-messages#signed-in-not-supported\"",
                "timestamp": 1540360531450,
                "type": ""
            }
        ],
        "screenShotFile": "images/006e00a5-001f-0026-006f-00fe003c0077.png",
        "timestamp": 1540360521230,
        "duration": 16429
    },
    {
        "description": "should have the banner as a background picture on the home page|A new credit card|Capitalone",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 7651,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images/000300df-0019-00cc-00e1-001d00cc0092.png",
        "timestamp": 1540360538096,
        "duration": 1912
    },
    {
        "description": "should navigate to new page after home banner button is clicked |A new credit card|Capitalone",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 7651,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "SEVERE",
                "message": "https://secure.leadback.advertising.com/adcedge/lb?site=695501&betr=sslbet_1509044808=ssprlb_1509044808[720] - Failed to load resource: net::ERR_NAME_NOT_RESOLVED",
                "timestamp": 1540360545686,
                "type": ""
            }
        ],
        "screenShotFile": "images/00170069-0020-0030-0068-008300c900df.png",
        "timestamp": 1540360540564,
        "duration": 7228
    },
    {
        "description": "should navigate to venture card home page and move the slider bar|A new credit card|Capitalone",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 7651,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "images/00ce001c-0080-0058-00db-001d00e20041.png",
        "timestamp": 1540360548069,
        "duration": 6068
    },
    {
        "description": "should show the correct value in miles rewards box|A new credit card|Capitalone",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 7651,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images/0072008f-0088-000d-0059-0041005d0046.png",
        "timestamp": 1540360554496,
        "duration": 6162
    },
    {
        "description": "should bring up the platinum card when clicked|A new credit card|Capitalone",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 7651,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://nexus.ensighten.com/capitalone/prod/code/ec2de2811efa0ded937779c747457c31.js?conditionId0=1433770 52:471 \"Snowplow: Tracker namespace capone already exists.\"",
                "timestamp": 1540360566444,
                "type": ""
            }
        ],
        "screenShotFile": "images/00f800e7-0053-00b8-0079-00db00cf00d3.png",
        "timestamp": 1540360561008,
        "duration": 5547
    },
    {
        "description": "should filter the results|A new credit card|Capitalone",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 7651,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://nexus.ensighten.com/capitalone/prod/code/ec2de2811efa0ded937779c747457c31.js?conditionId0=1433770 52:471 \"Snowplow: Tracker namespace capone already exists.\"",
                "timestamp": 1540360566932,
                "type": ""
            }
        ],
        "screenShotFile": "images/00e00074-004c-00ab-0005-0016001a0018.png",
        "timestamp": 1540360566947,
        "duration": 5866
    },
    {
        "description": "should check current Url|Testing Careers & Jobs Page in footer section|Testing Capitalone Bank page",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 7651,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images/00b200db-007d-00d8-0001-001b008e0018.png",
        "timestamp": 1540360576675,
        "duration": 2561
    },
    {
        "description": "(should test entering special characters as a search keyword)|Testing Careers & Jobs Page in footer section|Testing Capitalone Bank page",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 7651,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images/00410053-004b-00b0-00ec-00fd008b000e.png",
        "timestamp": 1540360579733,
        "duration": 1566
    },
    {
        "description": "should negatif test for job search location box |Testing Careers & Jobs Page in footer section|Testing Capitalone Bank page",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 7651,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images/00910006-00f2-0093-00c0-0000004d0057.png",
        "timestamp": 1540360581661,
        "duration": 1577
    },
    {
        "description": "should test Radius option box by correct location|Testing Careers & Jobs Page in footer section|Testing Capitalone Bank page",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 7651,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images/00a5001d-00c3-00ad-004d-00a0004e003d.png",
        "timestamp": 1540360583792,
        "duration": 4288
    },
    {
        "description": "should search some job keywords and check results|Testing Careers & Jobs Page in footer section|Testing Capitalone Bank page",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 7651,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "images/00c1009a-00bc-0070-00b9-004a00d80010.png",
        "timestamp": 1540360588637,
        "duration": 4351
    },
    {
        "description": "should test Saved Jobs button|Testing Careers & Jobs Page in footer section|Testing Capitalone Bank page",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 7651,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images/007000c9-00ed-00e1-0049-008d0031007c.png",
        "timestamp": 1540360593449,
        "duration": 560
    },
    {
        "description": "should check filter results button|Testing Careers & Jobs Page in footer section|Testing Capitalone Bank page",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 7651,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images/009a0050-00d3-0039-0090-007800d800c7.png",
        "timestamp": 1540360594637,
        "duration": 4033
    },
    {
        "description": "should test Job Alerts form is Displayed|Testing Careers & Jobs Page in footer section|Testing Capitalone Bank page",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 7651,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images/00190098-005e-001b-005e-006200b4008f.png",
        "timestamp": 1540360599036,
        "duration": 1127
    },
    {
        "description": "should test Job Alerts form without filling to Sign up |Testing Careers & Jobs Page in footer section|Testing Capitalone Bank page",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 7651,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images/00aa008a-00f3-0083-00de-0049002800de.png",
        "timestamp": 1540360600930,
        "duration": 1233
    },
    {
        "description": "should check for Next, Previous page pagination functionality|Testing Careers & Jobs Page in footer section|Testing Capitalone Bank page",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 7651,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "images/005f0023-00f1-00c1-00fc-007b00ed0004.png",
        "timestamp": 1540360602720,
        "duration": 3213
    }
];

    this.sortSpecs = function () {
        this.results = results.sort(function sortFunction(a, b) {
    if (a.sessionId < b.sessionId) return -1;else if (a.sessionId > b.sessionId) return 1;

    if (a.timestamp < b.timestamp) return -1;else if (a.timestamp > b.timestamp) return 1;

    return 0;
});
    };

    this.sortSpecs();
});

app.filter('bySearchSettings', function () {
    return function (items, searchSettings) {
        var filtered = [];
        var prevItem = null;

        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            item.displaySpecName = false;

            countLogMessages(item);

            var hasLog = searchSettings.withLog && item.browserLogs && item.browserLogs.length > 0;
            if (searchSettings.description === '' ||
                (item.description && item.description.toLowerCase().indexOf(searchSettings.description.toLowerCase()) > -1)) {

                if (searchSettings.passed && item.passed || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    prevItem = item;
                } else if (searchSettings.failed && !item.passed && !item.pending || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    prevItem = item;
                } else if (searchSettings.pending && item.pending || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    prevItem = item;
                }

            }
        }

        return filtered;
    };
});

var isValueAnArray = function (val) {
    return Array.isArray(val);
};

var checkIfShouldDisplaySpecName = function (prevItem, item) {
    if (!prevItem) {
        item.displaySpecName = true;
        return;
    }

    if (getSpec(item.description) != getSpec(prevItem.description)) {
        item.displaySpecName = true;
        return;
    }
};

var getSpec = function (str) {
    var describes = str.split('|');
    return describes[describes.length - 1];
};

var countLogMessages = function (item) {
    if ((!item.logWarnings || !item.logErrors) && item.browserLogs && item.browserLogs.length > 0) {
        item.logWarnings = 0;
        item.logErrors = 0;
        for (var logNumber = 0; logNumber < item.browserLogs.length; logNumber++) {
            var logEntry = item.browserLogs[logNumber];
            if (logEntry.level === 'SEVERE') {
                item.logErrors++;
            }
            if (logEntry.level === 'WARNING') {
                item.logWarnings++;
            }
        }
    }
};
