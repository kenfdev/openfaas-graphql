"use strict"
import {
    graphql,
    execute
} from 'graphql';
import { StarWarsSchema } from './data/swapiSchema';
import { GraphQLOptions, runHttpQuery } from 'apollo-server-core';

module.exports = (context: any, callback: any) => {

    const body = JSON.parse(context);

    const options: GraphQLOptions = {
        schema: StarWarsSchema,
    }

    runHttpQuery([], {
        method: 'POST',
        options: options,
        query: body.query,
    }).then(result => {
        callback(undefined, result);
    }).catch(err => callback(err, undefined));


    // graphql(StarWarsSchema, body.query).then(result => {
    //     callback(undefined, result);
    // }).catch(err => callback(err, undefined));

}