import axios from "axios";
import { HandlerEvent } from '@netlify/functions';

const API_ENDPOINT = 'https://pupperly-api.hasura.app/v1/graphql'

exports.handler = async (event: HandlerEvent) => {
  let query = {
    query: `
    query MyQuery {
      test {
        test
      }
    }
    `
  }

  const result = await axios({
    url: API_ENDPOINT,
    method: 'POST',
    data: query
  })

  console.log(result);

  return {
    statusCode: 200,
    body: JSON.stringify('hello')
  }
}