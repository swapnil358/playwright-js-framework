const { join } = require('path');

let args = {};
for (let index = 3; index < process.argv.length; index++) {
    const arg= process.argv[index];
    let splits = arg.split("=");
    let key = splits[0].split("--")[1];
    let value = splits[1];
    args[key] = value;
}

// global.tag = args["tagExpression"];
// if (tag.toString().include("PM_SetUpData") ||  tag.toString().include("PM_ResetData")) {
//     global.stateProfile = "NV";
//     global.server = "nv1auto.eng.vimo.com";
//     global.envPrefix = global.server.split(".")[0];
// } else {
//     global.stateProfile = args["state"];
//     global.server = args["server"];
//     global.envPrefix = global.server.split(".")[0];
// }

// global.url = "https://" + server + "/hix";
// global.year = args["applicationYear"];
// global.docker = process.env.DOCKER;
// global.zip = args["zipcode"];
// global.testCaseName = args["test_case_name"]


// const serverConfig = 
//     process.env.DOCKER === "true" ? { hostname = "webdriver3.eng.vimo.com", port = 4444, path: "/wd/hub" } : {}
    
// const fs = require('fs');
// global.downloadDir = join(process.cwd(), 'tempDownloads')

// exports.config = {
//     ...serverConfig

//     //=========================
//     //  Runner Configuration
//     //=========================
//     //
//     //
//     //
//     //
//     //WebdriverIo allow it to run your tests in arbitrary location (eg. locally or remote machine)
//     //
//     //

//     //

// }
    

// capabilities: [
//     {
//         browserName: "chrome",
//         "goog:chromeOptions": {
//             prefs: {
//                 'directory_upgrade': true,
//                 'prompt_for_download': false,
//             'download.default_directory': downloadDir,
//             },
//             'args': ['--start-maximized']
//                 +
//                 process.env.HEADLESS === "true" ? ["--headless", "--disable-gpu"] : []
//                     +
//                     process.env.DOCKER === "true" ? ["--no-sandbox"] : []
//         },
//     },
// ],

module.exports = {

    

    default: {
            tags: process.env.npm_config_TAGS || "",
            formatOptions: {
                snippetInterface: "async-await"
            },
            paths: [
                "src/test/features/*.feature"
               
            ],
            
            dryRun: false,
            require: [
                "src/test/steps/*.ts",
                "src/hooks/hooks.ts"
            ],
            requireModule:[
                "ts-node/register" 
            ],
            format:[
                "html:test-results/cucumber-report.html",
                "json:test-results/cucumber-report.json",
                "rerun:@rerun.txt"
            ],
        parallel: Number(process.env.npm_config_THREAD) || 5,
        retry: Number(process.env.npm_config_RETRY) || 0,
        retryTagFilter: process.env.npm_config_retryTagFilter
            
        },
        rerun:{
            formatOptions: {
                snippetInterface: "async-await"
            },
    
            
            dryRun: false,
            require: [
                "src/test/steps/*.ts",
                "src/hooks/hooks.ts"
            ],
            requireModule:[
                "ts-node/register" 
            ],
            format:[
                "html:test-results/cucumber-report.html",
                "json:test-results/cucumber-report.json",
                "rerun:@rerun.txt"
            ],
            parallel: 2
            
        }
    }

