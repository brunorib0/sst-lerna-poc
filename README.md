# POC for Lerna monorepo

[![Seed Status](https://api.seed.run/brunorib62/sst-lerna-poc/stages/prod/build_badge)](https://console.seed.run/brunorib62/sst-lerna-poc)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

A [Serverless Stack Framework (SST)](https://github.com/serverless-stack/serverless-stack) monorepo starter that uses [Lerna](https://lerna.js.org) and [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/).

- A full-stack serverless app
- Designed to scale for larger teams
- Maintains internal dependencies as packages
- Supports publishing dependencies as private NPM packages
- Uses Yarn Workspaces to hoist packages to the root `node_modules/` directory

-----
## TODO
- [ ] Integrate tslint to project (see conflict of node version with SEED)
- [ ] Sonarqube integration
- [ ] Route53 static for external services (I don't have any domain in my private AWS account, and didn't want to purchase one just for testing :P)
- 


-----

## Intro

Service created for testing technologies and starting a repo for future services.

## Tools

### Lerna + Yarn workspaces
Tool for managing multiple packages in a single repo (monorepo)

- https://lerna.js.org/
- https://classic.yarnpkg.com/lang/en/

### Stateless stack with CDK
Platform for deployment of our services in AWS using CDK
- https://serverless-stack.com/

### SEEDS
CI/CD manager for serverless apps in AWS
- https://console.seed.run/

### Commitizen
Tool for helping us enforcing good practices on commit messages.

https://www.npmjs.com/package/commitizen




------

## Based on

Service created from the template hosted in https://github.com/serverless-stack/lerna-yarn-starter