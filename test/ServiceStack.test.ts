import { Template } from "aws-cdk-lib/assertions";
import * as sst from "@serverless-stack/resources";
import Service1Stack from "../lib/Service1Stack";

test("Test StorageStack", () => {
    const app = new sst.App();
    // WHEN
    const stack = new Service1Stack(app, "test-stack");
    // THEN
    const template = Template.fromStack(stack);

    expect(template.findOutputs("Service1Endpoint")).toHaveProperty("Service1Endpoint");
});
