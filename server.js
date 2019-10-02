const http = require('http');
const express = require('express');
const client = require("twilio")(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const app = express();

app.post('/start', (req, res) => {
  countryCode = req.query.country_code
  phoneNumber = req.query.phone_number
  via = req.query.via

  client.verify.services(process.env.VERIFY_SERVICE_SID)
    .verifications
    .create({to: `+${countryCode}${phoneNumber}`, channel: via})
    .then(resp => res.json(resp));
});


app.post('/check', (req, res) => {
  countryCode = req.query.country_code
  phoneNumber = req.query.phone_number
  code = req.query.code

  client.verify.services(process.env.VERIFY_SERVICE_SID)
    .verificationChecks
    .create({to: `+${countryCode}${phoneNumber}`, code: code})
    .then(resp => res.json(resp));
});


app.listen(3000, () => {
  console.log('Express server listening on port 3000.');
});
