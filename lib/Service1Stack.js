import * as sst from "@serverless-stack/resources";

export default class Service1Stack extends sst.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);

        /**
         * Documentation on external modules
         * https://docs.serverless-stack.com/advanced/lambda-layers#2-use-node_modules-from-an-external-layer
         */

            // Create a HTTP API
        const api = new sst.Api(this, "Api", {
                defaultFunctionProps: {
                    srcPath: "src/services/service1",
                    bundle: {
                        externalModules: [
                            "@nestjs/microservices",
                            "@nestjs/websockets/socket-module",
                            "class-validator",
                            "cache-manager",
                            "class-transformer"
                        ]
                    }
                },
                routes: {
                    "ANY /{any+}": "src/lambda.handler",
                },
            });

        this.api = api;

        // Show the endpoint in the output
        this.addOutputs({
            Service1Endpoint: api.url,
        });
    }
}
