# Verify Backend

The following project is a sample for implementing the backend needed for supporting the Phone Verification in mobile or web apps. Full tutorial for adding phone verification to iOS available on the Twilio blog: https://www.twilio.com/blog/phone-verification-in-ios-with-twilio-verify-and-swift-html

## Heroku

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/robinske/verify-server-node)

Setup your `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN`, and `VERIFY_SERVICE_SID` as a Heroku config variables. You can do this via the [CLI](https://devcenter.heroku.com/articles/config-vars#managing-config-vars) or in the [Heroku dashboard](https://devcenter.heroku.com/articles/config-vars#using-the-heroku-dashboard).

## Local
Copy .env.example to .env and fill in the necessary config variables.

Run with Node:

```
node server.js
```

## Config variables

These are required to run the server application.

Found in the [Twilio Console](https://www.twilio.com/console/):
* `TWILIO_ACCOUNT_SID`
* `TWILIO_AUTH_TOKEN`

Create a [verification service](https://www.twilio.com/console/verify/services):
* `VERIFY_SERVICE_SID`