"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const swapiSchema_1 = require("./data/swapiSchema");
module.exports = (context, callback) => {
    const body = JSON.parse(context);
    graphql_1.graphql(swapiSchema_1.StarWarsSchema, body.query).then(result => {
        callback(undefined, result);
    }).catch(err => callback(err, undefined));
};
//# sourceMappingURL=handler.js.map