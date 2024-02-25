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
            parallel: Number(process.env.npm_config_THREAD) || 2
            
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

