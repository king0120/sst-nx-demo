import {Api, App, Function, StackContext} from "sst/constructs";

import {NextApp} from "./MyStack";

export default function (app: App) {
    app.setDefaultFunctionProps({
        runtime: "nodejs16.x",
    });
    // app.stack(TestAPI);
    app.stack(NextApp);

}

function TestAPI({stack}: StackContext) {
    const api = new Function(stack, "TestLambda", {
        handler: '../services/functions/lambda.handler'
    })
}