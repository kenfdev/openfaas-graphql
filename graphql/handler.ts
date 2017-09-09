"use strict"
import {
    graphql,
    execute
} from 'graphql';
import { StarWarsSchema } from './data/swapiSchema';

module.exports = (context: any, callback: any) => {

    const body = JSON.parse(context);

    graphql(StarWarsSchema, body.query).then(result => {
        callback(undefined, result);
    }).catch(err => callback(err, undefined));

}