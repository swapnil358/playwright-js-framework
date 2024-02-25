import { LaunchOptions, chromium, firefox, webkit } from "@playwright/test";


const options: LaunchOptions = {
    headless: false,
}
export const invokeBrowser = () => {
    const browserType = process.env.BROWSER || process.env.npm_config_BROWSER;
    switch (browserType) {
        case "chrome":
            return chromium.launch(options);
        case "firefox":
            return firefox.launch(options);
        case "webkit":
            return webkit.launch(options);
        
        default:
            throw new Error("Please set proper browser!");
            
    }
}