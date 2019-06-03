const http = require('http');
const express = require('express');
const authy = require("authy")(process.env.AUTHY_API_KEY);

const app = express();

app.post('/start', (req, res) => {
  country_code = req.query.country_code
  phone_number = req.query.phone_number
  via = req.query.via

  authy
    .phones()
    .verification_start(phone_number, country_code, via, function(err, resp) {
      if (err) {
        res.json(err);
      }

      res.json(resp);
    });
});


app.post('/check', (req, res) => {
  country_code = req.query.country_code
  phone_number = req.query.phone_number
  code = req.query.code

  authy
    .phones()
    .verification_check(phone_number, country_code, code, function (err, resp) {
    if (err) {
      // invalid token  
      res.json(err);
    }
  
    res.json(resp)
  });
});


http.createServer(app).listen(1337, () => {
  console.log('Express server listening on port 1337');
});
