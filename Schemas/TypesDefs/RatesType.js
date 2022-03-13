const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString } = graphql;

const RatesType = new GraphQLObjectType({
  name: 'Rates',
  fields: () => ({
    USD: {type: GraphQLString}
  })
});

module.exports = RatesType;