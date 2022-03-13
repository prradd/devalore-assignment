const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString } = graphql;
const RatesType = require('./RatesType');

const CurrencyType = new GraphQLObjectType({
  name: 'Currency',
  fields: () => ({
    base: {type: GraphQLString},
    date: {type: GraphQLString},
    rates: {type: RatesType}
  })
});

module.exports = CurrencyType;