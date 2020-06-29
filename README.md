<p align="center">
<a href="https://kit.snapchat.com/" target="blank"><img src="https://kit.snapchat.com/images/share/snap-kit-share.png" width="320" alt="Snap Kit Logo" /></a>
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
  
</p>

  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

A [Nest](https://github.com/nestjs/nest) framework TypeScript starter repository for creating applications utilizing the [SnapChat Snap Kit SDK](https://kit.snapchat.com/) with [Passport-Snapchat](https://github.com/Snapchat/passport-snapchat).

## Snap Kit App Configuration

- Login to [Snap Kit Developer Portal](https://kit.snapchat.com/) and create a new application.
- Enable Login Kit. Add 'http://localhost:3000/callback' to the redirect URLs.
- Enable 'Web' OAuth2 Client and generate API Keys/Secret.
- Copy the 'CLIENT ID FOR CONFIDENTIAL OAUTH2 FLOW' into .env file as SNAP_CLIENT_ID.
- Copy the 'CLIENT SECRET FOR CONFIDENTIAL OAUTH2 FLOW' into .env file as SNAP_KEY.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
