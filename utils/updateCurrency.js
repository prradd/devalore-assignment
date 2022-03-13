const request = require('request');

const fs = require('fs');

const updateCurrency = async () => request(
  'http://api.exchangeratesapi.io/v1/latest?access_key=4bb2929833b31267b55e832024773548',
  { json: true },
  (err, res, body) => {
    if (!err) {
      const newRates = JSON.stringify(body) || {};
      fs.writeFile("../CURRENCY_USD_RATES.json", newRates, 'utf8', (err) => {
        if (err) {
          console.log("An error occured while writing JSON Object to File.");
          return console.log(err);
        }
        console.log("JSON file has been saved.");
      });
    }
    return body;
  }
);

module.exports = updateCurrency;