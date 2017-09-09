"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const swapiSchema_1 = require("./data/swapiSchema");
const apollo_server_core_1 = require("apollo-server-core");
module.exports = (context, callback) => {
    const body = JSON.parse(context);
    const options = {
        schema: swapiSchema_1.StarWarsSchema,
    };
    apollo_server_core_1.runHttpQuery([], {
        method: 'POST',
        options: options,
        query: body.query,
    }).then(result => {
        callback(undefined, result);
    }).catch(err => callback(err, undefined));
    // graphql(StarWarsSchema, body.query).then(result => {
    //     callback(undefined, result);
    // }).catch(err => callback(err, undefined));
};
//# sourceMappingURL=handler.js.map