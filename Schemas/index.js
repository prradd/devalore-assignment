const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLSchema,
} = graphql;
const CurrencyType = require('./TypesDefs/CurrencyType');
const RatesType = require('./TypesDefs/RatesType');

const currencyUsdRates = require('../CURRENCY_USD_RATES.json');

const updateCurrency = require('../utils/updateCurrency')

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    getCurrentUsdValue: {
      type: CurrencyType,
      resolve: () => {
        return currencyUsdRates;
      }
    },
    setCurrentUsdValues: {
      type: CurrencyType,
      resolve: async () => {
        const updated = await updateCurrency();
        return updated;
      },
    }
  }
});

module.exports = new GraphQLSchema({ query: RootQuery });