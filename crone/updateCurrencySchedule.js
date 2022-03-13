const request = require('request');

const query =  `query{
  setCurrentUsdValues {
    base
    date
    rates {
      USD
    }
  }
}`;

const updateCurrencySchedule = () => {
  setInterval(() => {
    request.post('localhost',{
      port: 3000,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify( { query })
    }, () => console.log('Currency updated'))
  }, 5 * 60 * 1000)
};

module.exports = updateCurrencySchedule;