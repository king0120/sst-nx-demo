import {NextjsSite, StackContext} from "sst/constructs";

export function NextApp({stack}: StackContext) {
    const site = new NextjsSite(stack, "SiteDemo", {
        path: 'apps/next-app',
        waitForInvalidation: false,
    
        environment: {
            // Pass the table details to our app
            REGION: 'us-east-1'
        },
    });

// Show the site URL in the output
    stack.addOutputs({
        URL: site.url,
    });
}